import React, { useState } from 'react';
import './BookForm.css'; // Vamos criar este arquivo de estilo a seguir

export const BookForm = ({ onSubmit }) => {
  const [isbn, setIsbn] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    if (!isbn || !titulo || !autor) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onSubmit({ isbn, titulo, autor });
    // Limpa os campos após o envio
    setIsbn('');
    setTitulo('');
    setAutor('');
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Adicionar Novo Livro</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          type="text"
          placeholder="Título do Livro"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>
      <button type="submit">Salvar Livro</button>
    </form>
  );
};