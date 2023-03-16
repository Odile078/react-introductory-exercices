import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const animals = [
    { name: "dog", emoji: "🐶" },
    { name: "cat", emoji: "🐱" },
    { name: "cow", emoji: "🐮" },
    { name: "sheep", emoji: "🐏" },
    { name: "horse", emoji: "🐴" },
  ];
  return (
    <div className="App">
      <ul>
        {animals.map((animal, index) => (
          <ListItem key={index}>
            {animal.emoji} {animal.name}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
