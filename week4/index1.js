const express = require('express')
const app = express()

var patient = [{
    name : 'ramu',
    kidney: [{
        healthy: true,
    },{
            healthy: false
        }
    ]
}]

app.get("/", function(req,res){
    const ramukikidney = patient[0].kidney;
    const totalkidney = ramukikidney.length;
    

})

app.post("/", function(req,res){

})
app.put("/", function(req,res){

})
app.delete("/", function(req,res){

})


app.listen(3000);