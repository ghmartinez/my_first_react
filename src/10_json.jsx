import books from './data/books.json';

const App = () => {
  return (
    <div>
      <h1>Books</h1>

      {books.map((book, key) => (
        <div key={key}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        ))}
    </div>
  );
};

export default App;
