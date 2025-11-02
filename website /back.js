import express from "express";
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());


app.get("/add/:a/:b", (req, res) => {
       const a = parseFloat(req.params.a);
       const b = parseFloat(req.params.b);

       res.json({
           answer: a + b
       });
});


app.listen(3000);






