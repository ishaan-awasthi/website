import Bookshelf from "./Bookshelf";
import bookDetails from "../../../public/bookshelf/books.json";

const books = Object.entries(bookDetails).map(([file, details]) => ({
  file,
  src: `/bookshelf/books/${encodeURIComponent(file)}`,
  ...details,
}));

export default function BookshelfPage() {
  return (
    <main className="page bookshelf-page">
      <section className="index-list bookshelf-heading"><h1>bookshelf</h1></section>
      <Bookshelf books={books} />
      <a className="back-link" href="/things">back</a>
    </main>
  );
}
