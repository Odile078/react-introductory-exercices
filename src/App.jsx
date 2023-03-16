import "./App.css";
import JokeCard from "./components/JokeCard";

function App() {
  const data = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];
  return (
    <div className="page-container">
      <div className="cards">
        {data.map((joke, index) => (
          <JokeCard key={index} {...joke} />
        ))}
      </div>
    </div>
  );
}

export default App;
