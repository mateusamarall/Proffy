import express from "express";

const app = express();

app.use(express.json());

app.get("/users", () => {
  console.log("aee");
});

app.listen(3333);
