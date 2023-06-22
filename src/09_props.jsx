import Book from './components/Book.jsx';
import books from './data/books.json';

const App = () => {
  return (
    <div>
      <h1>Books</h1>
      {books.map(book => (
        <div key={book.id}>
          <h2><Book title={book.title} /></h2>
          <h3><Book title={book.author} /></h3>
        </div>
      ))}
    </div>
  );
};

export default App;
