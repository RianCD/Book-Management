import React, { useState } from 'react';
import './BookSearch.css';

export const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      alert('Por favor, digite um ISBN para buscar.');
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <form className="book-search" onSubmit={handleSearch}>
      <h2>Buscar Livro por ISBN</h2>
      <div className="search-group">
        <input
          type="text"
          placeholder="Digite o ISBN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
};