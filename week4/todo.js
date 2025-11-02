const express = require('express');
const app = express();

//assignment: create a todo application with express

let todos =[];

app.use(express.json());//middleware to parse JSON body


app.post("/", function(req,res){
         
         const newChore = req.body.newChore;
         todos[0].push(newChore);

})

app.delete("/", function(req,res){

})


app.get("/", function(req,res){
    if()
        {
        res.json(todos);
    }
    else()
    {res.status(200).json({message: "todos fetched successfully"});
}
})


