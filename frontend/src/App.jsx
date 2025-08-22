import { useState, useEffect } from 'react';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import { BookSearch } from './components/BookSearch';
import { BookSearchResult } from './components/BookSearchResult';
import * as bookService from './api/bookService';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [listError, setListError] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await bookService.getAllBooks();
      setBooks(response.data);
    } catch (err) {
      setListError('Falha ao carregar os livros. O backend está rodando?');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async (bookData) => {
    try {
      await bookService.createBook(bookData);
      fetchBooks();
    } catch (err) {
      setListError('Falha ao adicionar o livro.');
      console.error(err);
    }
  };

  const handleSearchBook = async (isbn) => {
    try {
      setSearchError('');
      setSearchResult(null);
      const response = await bookService.getBookByIsbn(isbn);
      setSearchResult(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setSearchError(`Nenhum livro encontrado com o ISBN: ${isbn}`);
      } else {
        setSearchError('Falha ao buscar o livro.');
      }
      console.error(err);
    }
  };

  // --- NOVA FUNÇÃO PARA DELETAR ---
  const handleDeleteBook = async (isbn) => {
    // Pede a confirmação do usuário
    const isConfirmed = window.confirm(
      'Tem certeza que deseja deletar este livro?'
    );

    if (isConfirmed) {
      try {
        await bookService.deleteBookByIsbn(isbn);
        // Após deletar, atualiza a lista de livros para refletir a mudança
        fetchBooks(); 
      } catch (err) {
        setListError(`Falha ao deletar o livro com ISBN: ${isbn}`);
        console.error(err);
      }
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>BookManagement</h1>
      </header>
      <main>
        <BookForm onSubmit={handleAddBook} />
        
        <hr />

        <BookSearch onSearch={handleSearchBook} />
        <BookSearchResult result={searchResult} error={searchError} />
        
        <hr />

        {listError && <p className="error-message">{listError}</p>}
        {/* Passando a nova função para o BookList */}
        <BookList books={books} onDelete={handleDeleteBook} />
      </main>
    </div>
  );
}

export default App;