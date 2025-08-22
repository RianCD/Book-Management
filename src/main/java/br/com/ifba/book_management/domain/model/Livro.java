package br.com.ifba.book_management.domain.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "livros")
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Livro  {

    @Id
    private String isbn;
    private String titulo;
    private String autor;
}