package br.com.ifba.book_management.application.usecase;

import br.com.ifba.book_management.application.service.LivroService;
import br.com.ifba.book_management.domain.model.Livro;
import br.com.ifba.book_management.domain.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class LivroServiceImpl implements LivroService {
    private final LivroRepository livroRepository;

    @Override
    @Transactional
    public Livro save(Livro livro) {
        return livroRepository.save(livro);
    }

    @Override
    @Transactional
    public List<Livro> findAll() {
        return livroRepository.findAll();
    }

    @Override
    public Optional<Livro> findByIsbn(String isbn) {
        return livroRepository.findByIsbn(isbn);
    }
}