import 'express' from "express";
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello! world");
})

app.post("/data", (req, res) =>{
    req.body.json;
    res.send("POST request to the homepage");
})


app.listen(3000);