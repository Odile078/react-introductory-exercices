import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        {["dog", "cat", "chicken", "cow", "sheep", "horse"].map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
