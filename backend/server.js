import express from "express";

const port = process.env.PORT || 3000;

const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// get a list of 5 jokes

app.get("/api/sohail", (req, res) => {
  const message = "asalamu Alaikum";
  res.send(message);
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Joke 2",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "What do you call cheese that isn't yours? Nacho cheese!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
