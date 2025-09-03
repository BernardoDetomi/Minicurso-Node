import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
 res.send("busca todos!");
});

app.get("/hello/:id", (req, res) => {
    console.log(req.params.id);
    res.send("busca um só!");
   });

app.post("/hello", (req, res) => {
    console.log (req.body);
    res.send("criou algo!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});