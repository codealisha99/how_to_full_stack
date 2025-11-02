import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
  res.status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
