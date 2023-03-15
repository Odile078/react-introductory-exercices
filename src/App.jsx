import "./App.css";
import Button from "./components/Button";

function App() {
  const btnAlert = (buttonId) => {
    return alert(`You clicked on Button ${buttonId}`);
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
              url: "https://deploy-preview-2--clever-naiad-78d51b.netlify.app/",
            },
            {
              name: "exercise3",
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
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
      <div className="btn-list">
        <Button onClick={() => btnAlert(1)}>Button 1</Button>
        <Button onClick={() => btnAlert(2)}>Button 2</Button>
        <Button onClick={() => btnAlert(3)}>Button 3</Button>
      </div>
    </div>
  );
}

export default App;
