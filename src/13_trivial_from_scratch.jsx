import questions from './assets/data/questions.json';

const q = questions[0];

const pablo = () => {
  alert('pablo');
}

const App = () => (
  <div>
    <h1>{q.question}</h1>
  </div>

  onClick={() => {
    1 + 1;
    pablo();
  }}
);

export default App;
