import "./App.css";
import JokeCard from "./components/JokeCard";
import { jokes } from "./data/jokes";
function App() {
  return (
    <div className="page-container">
      <div className="cards">
        {jokes.map((joke, index) => (
          <JokeCard key={index} {...joke} />
        ))}
      </div>
    </div>
  );
}

export default App;
