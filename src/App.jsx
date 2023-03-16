import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFormSubmit = () => {
    alert(`Hello ${firstName} ${lastName} !`);
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
      <form className="form">
        <div>
          <input
            type="text"
            placeholder="First name"
            className="form-input"
            onChange={(e) => setFirstName(e?.target?.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            className="form-input"
            onChange={(e) => setLastName(e?.target?.value)}
          />
        </div>
        <button type="button" onClick={handleFormSubmit} className="form-btn">
          Greet me
        </button>
      </form>
    </div>
  );
}

export default App;
