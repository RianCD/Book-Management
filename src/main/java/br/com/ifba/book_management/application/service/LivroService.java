package br.com.ifba.book_management.application.service;

import br.com.ifba.book_management.domain.model.Livro;

import java.util.List;
import java.util.Optional;

public interface LivroService {
    Livro save(Livro livro);
    List<Livro> findAll();
    Optional<Livro> findByIsbn(String isbn);
    void deleteByIsbn(String isbn);
}