import express from "express";


const app = express();

//add a middleware 

app.get("/add", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a + b
    });
})


app.get("/multiply/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a * b
    });
})

app.get("/divide", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        answer: a / b
    });
})

app.get("/substract", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        answer: a - b
    });
})


app.listen(3000);