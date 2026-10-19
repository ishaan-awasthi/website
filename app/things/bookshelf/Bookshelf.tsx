"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Book = {
  file: string;
  src: string;
  title: string;
  author: string;
  year: string;
  summary: string;
  thoughts: string;
};

export default function Bookshelf({ books }: { books: Book[] }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const shelfOrder = [
    ["emergence.png", 99],
    ["zen.png", 93],
    ["justforfun.png", 92],
    ["dictionary.png", 88],
    ["clockofthelongnow.png", 91],
    ["geb.png", 98],
    ["thethirddoor.png", 100],
    ["makesomethingwonderful.png", 99],
    ["jonathanlivingston.png", 94],
    ["systemofmaterialism.png", 97],
    ["bible.png", 98],
    ["salmonofdoubt.png", 89],
  ] as const;
  const booksByFile = new Map(books.map((book) => [book.file, book]));
  const shelfBooks = shelfOrder.flatMap(([file, height]) => {
    const book = booksByFile.get(file);
    return book ? [{ book, height }] : [];
  });

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedBook(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <section className="shelf-stage" aria-label="a clickable bookshelf">
        <div className="shelf-books">
          {shelfBooks.map(({ book, height }) => (
            <button
              className="shelf-book"
              key={book.file}
              type="button"
              aria-label={`Open ${book.title}`}
              onClick={() => setSelectedBook(book)}
              style={{ "--book-height": `${height}%` } as CSSProperties}
            >
              <img src={book.src} alt="" />
            </button>
          ))}
        </div>
        <img className="shelf-image" src="/bookshelf/shelf-cropped.png" alt="" />
      </section>

      {selectedBook && (
        <div className="book-dialog-backdrop" role="presentation" onMouseDown={() => setSelectedBook(null)}>
          <section
            className="book-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="open-book-pages">
              <article className="open-book-page open-book-left">
                <h1 id="book-dialog-title">{selectedBook.title}</h1>
                <p className="book-author">{selectedBook.author}, {selectedBook.year}</p>
                <p>{selectedBook.summary}</p>
              </article>
              <article className="open-book-page open-book-right">
                <p>{selectedBook.thoughts}</p>
              </article>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
