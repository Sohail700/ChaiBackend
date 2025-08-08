import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/sohail")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <h1>sohail and chai</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
