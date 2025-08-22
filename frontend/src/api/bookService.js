import axios from 'axios';

// A instância continua a mesma, apontando para a base /api/livros
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/livros', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para buscar todos os livros
export const getAllBooks = () => {
  // Alterado de '/' para '/findall' para corresponder ao @GetMapping
  return apiClient.get('/findall'); 
};

// Função para buscar um livro por ISBN
export const getBookByIsbn = (isbn) => {
  // Alterado de `/${isbn}` para `/findByIsbn/${isbn}`
  return apiClient.get(`/findByIsbn/${isbn}`); 
};

// Função para criar um novo livro
export const createBook = (bookData) => {
  // Alterado de '/' para '/save' para corresponder ao @PostMapping
  return apiClient.post('/save', bookData); 
};