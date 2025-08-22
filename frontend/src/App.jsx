import { useState, useEffect } from 'react';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import { BookSearch } from './components/BookSearch';
import { BookSearchResult } from './components/BookSearchResult';
import * as bookService from './api/bookService';
import './App.css';

function App() {
  // Estado para a lista de todos os livros
  const [books, setBooks] = useState([]);
  const [listError, setListError] = useState('');

  // Estado para o resultado da busca
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
      fetchBooks(); // Atualiza a lista completa
    } catch (err) {
      setListError('Falha ao adicionar o livro.');
      console.error(err);
    }
  };

  const handleSearchBook = async (isbn) => {
    try {
      setSearchError(''); // Limpa erros anteriores
      setSearchResult(null); // Limpa resultados anteriores
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
        <BookList books={books} />
      </main>
    </div>
  );
}

export default App;