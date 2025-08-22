package br.com.ifba.book_management.infrastructure.rest;

import br.com.ifba.book_management.application.service.LivroService;
import br.com.ifba.book_management.domain.model.Livro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros") // Define o caminho base para todos os endpoints deste controller
@RequiredArgsConstructor
public class LivroController {

    private final LivroService livroService;

    /**
     * Endpoint para adicionar um novo livro.
     * Mapeado para: POST /api/livros
     */
    @PostMapping
    public ResponseEntity<Livro> adicionarLivro(@RequestBody Livro livro) {
        Livro livroSalvo = livroService.save(livro);
        return new ResponseEntity<>(livroSalvo, HttpStatus.CREATED);
    }

    /**
     * Endpoint para listar todos os livros.
     * Mapeado para: GET /api/livros
     */
    @GetMapping
    public ResponseEntity<List<Livro>> listarTodosOsLivros() {
        List<Livro> livros = livroService.findAll();
        return ResponseEntity.ok(livros);
    }

    /**
     * Endpoint para buscar um livro pelo ISBN.
     * Mapeado para: GET /api/livros/{isbn}
     */
    @GetMapping("/{isbn}")
    public ResponseEntity<Livro> buscarLivroPorIsbn(@PathVariable String isbn) {
        return livroService.findByIsbn(isbn)
                .map(livro -> ResponseEntity.ok(livro)) // Se encontrar, retorna 200 OK com o livro
                .orElse(ResponseEntity.notFound().build()); // Se não encontrar, retorna 404 Not Found
    }
}