import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClickCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="page-container">
      <div className="nav-container">
        <ul className="nav-list">
          {[
            { name: "home", url: "https://clever-naiad-78d51b.netlify.app/" },
            {
              name: "exercise1",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise2",
              url: "https://deploy-preview-3--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise3",
              url: "https://deploy-preview-4--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise4",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise5",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise6",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise7",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise8",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise9",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
            },
          ].map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <h5>Button has been clicked: {count} times</h5>
      <button onClick={handleClickCount} className="btn">
        Click me
      </button>
    </div>
  );
}

export default App;
