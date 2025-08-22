package br.com.ifba.book_management.domain.repository;

import br.com.ifba.book_management.domain.model.Livro;

import java.util.List;
import java.util.Optional;

public interface LivroRepository {
    Livro save(Livro livro);
    List<Livro> findAll();
    Optional<Livro> findByIsbn(String isbn);
    void deleteByIsbn(String isbn);
}