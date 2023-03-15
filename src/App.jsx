import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <ul>
        {[
          "🐶 dog",
          "🐱 cat",
          "🐔 chicken",
          "🐮 cow",
          "🐏 sheep",
          "🐴 horse",
        ].map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
