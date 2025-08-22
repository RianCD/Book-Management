import React from 'react';
import './BookList.css';

export const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="empty-message">Nenhum livro cadastrado ainda.</p>;
  }

  return (
    <div className="book-list-container">
      <h2>Livros Cadastrados</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.isbn} className="book-item">
            <strong>{book.titulo}</strong>
            <span>Autor: {book.autor}</span>
            <small>ISBN: {book.isbn}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};