package br.com.ifba.book_management.application.usecase;

import br.com.ifba.book_management.application.service.LivroService;
import br.com.ifba.book_management.domain.exception.ResourceNotFoundException;
import br.com.ifba.book_management.domain.model.Livro;
import br.com.ifba.book_management.domain.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
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
        log.info("Salvando livro");
        try{
            Livro livroSalvo = livroRepository.save(livro);
            log.info("Livro salvo com sucesso");
            return livroSalvo;
        } catch (DataAccessException e){
            log.error("Erro ao salvar livro", e.getMessage());
            throw e;
        }
    }

    @Override
    @Transactional
    public List<Livro> findAll() {
        try {
            log.info("Listando livros");
            return livroRepository.findAll();
        }catch (EmptyResultDataAccessException e){
            log.error("Erro ao listar livros", e.getMessage());
            throw e;
        }
    }

    @Override
    public Optional<Livro> findByIsbn(String isbn) {
        log.info("Buscando livro pelo ISBN {}", isbn);
        return Optional.ofNullable(livroRepository.findByIsbn(isbn)
                .orElseThrow(() -> new ResourceNotFoundException("Nenhuma vacina encontrada")));
    }
}