package br.com.ifba.book_management.infrastructure.persistence;

import br.com.ifba.book_management.domain.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataLivroRepository extends JpaRepository<Livro, String> {
    Optional<Livro> findByIsbn(String isbn);
}