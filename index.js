import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, Diyor</h1>");
});

app.post("/register", (req, res)=>{
    res.sendStatus(201);
});

app.put("/user/diyor", (req, res) =>{
    res.sendStatus(200);
});

app.patch("/user/diyor", (req, res) =>{
    res.sendStatus(200);
});

app.delete("/user/diyor", (req, res) =>{
    res.sendStatus(200);
});

app.listen(port, () =>{
    console.log(`server started on port ${port}`);
});