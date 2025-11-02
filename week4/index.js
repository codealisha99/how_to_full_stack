const express = require('express')




function calculatesum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

const app = express()


app.get("/", function(req, res) {
    const n = parseInt(req.query.n) || 0;
    const ans = calculatesum(n);
    res.send(ans.toString());
})


app.listen(3000);