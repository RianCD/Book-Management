import React from 'react';
import './BookSearchResult.css';

export const BookSearchResult = ({ result, error }) => {
  if (error) {
    return <p className="search-error">{error}</p>;
  }

  if (!result) {
    return null; // Não exibe nada se não houver resultado nem erro
  }

  return (
    <div className="search-result">
      <h3>Resultado da Busca:</h3>
      <div className="book-item-found">
        <strong>{result.titulo}</strong>
        <span>Autor: {result.autor}</span>
        <small>ISBN: {result.isbn}</small>
      </div>
    </div>
  );
};