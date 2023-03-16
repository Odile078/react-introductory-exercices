import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );
    const data = await res.json();
    setUsers(data);
    setLoading(false);
    console.log("fetching", data);
  };
  useEffect(() => {
    getUsers();
  }, []);
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
              url: "https://exercise1-hello-world--clever-naiad-78d51b.netlify.app/",
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
      <button onClick={getUsers}>Fetch random</button>

      <div className="cards">
        {loading ? (
          <h5>Loading...</h5>
        ) : (
          users?.map((user, index) => <UserCard key={index} {...user} />)
        )}
      </div>
    </div>
  );
}

export default App;
