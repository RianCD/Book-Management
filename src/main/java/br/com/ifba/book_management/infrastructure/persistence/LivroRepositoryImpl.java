package br.com.ifba.book_management.infrastructure.persistence;

import br.com.ifba.book_management.domain.model.Livro;
import br.com.ifba.book_management.domain.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
//import br.com.ifba.book_management.infrastructure.persistence.SpringDataLivroRepository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class LivroRepositoryImpl implements LivroRepository {

    private final SpringDataLivroRepository springDataLivroRepository;

    @Override
    public Livro save(Livro livro) {
        return springDataLivroRepository.save(livro);
    }

    @Override
    public List<Livro> findAll() {
        return springDataLivroRepository.findAll();
    }

    @Override
    public Optional<Livro> findByIsbn(String isbn) {
        return springDataLivroRepository.findByIsbn(isbn);
    }
}