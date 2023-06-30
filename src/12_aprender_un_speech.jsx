import speech from "./data/speech.json";

const App = () => (
  <>
    <button>Previous</button>
    <button>Next</button>
    {speech.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </>
);

export default App;
