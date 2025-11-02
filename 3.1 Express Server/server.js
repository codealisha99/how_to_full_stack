import express from "express";
import cors from "cors";

const app = express();

//add a middleware 
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

let requestcount = 0;

function requestincreaser(req, res, next){
    requestcount++;
    console.log(`Request count: ${requestcount}`);
    next();
}


app.use(requestincreaser);
//define middleware and then use it in the app


app.get("/add/:a/:b",  (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a + b
    });
})


app.get("/multiply/:a/:b",   (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.status(200).json({
        answer: a * b
    });
})

app.get("/divide",  (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        answer: a / b
    });
})

app.get("/substract",  (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.status(200).json({
        answer: a - b
    });
})


app.listen(3000);