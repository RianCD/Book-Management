import React from 'react';
import './BookList.css';

// O componente agora recebe uma nova prop: onDelete
export const BookList = ({ books, onDelete }) => {
  if (books.length === 0) {
    return <p className="empty-message">Nenhum livro cadastrado ainda.</p>;
  }

  return (
    <div className="book-list-container">
      <h2>Livros Cadastrados</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.isbn} className="book-item">
            {/* Div para agrupar as informações do livro */}
            <div className="book-info">
              <strong>{book.titulo}</strong>
              <span>Autor: {book.autor}</span>
              <small>ISBN: {book.isbn}</small>
            </div>
            
            {/* --- BOTÃO DE DELETAR ADICIONADO --- */}
            <button 
              className="delete-btn" 
              onClick={() => onDelete(book.isbn)}
              title="Deletar livro"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};