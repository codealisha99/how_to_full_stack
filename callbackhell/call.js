function setimeoutpromisified(duration)
{
    return new promises(function (resolve)
    {
        setTimeout(resolve, duration);
    }
);
}
// end setimeoutpromisified
// settimeout is nested in a new promise function.


// function anything()
// {
//     console.log("i am only printed when called ");
// }


//  function setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//     console.log("hello");
//     setTimeout(function () {
//     console.log("hello there");
//     }, 5000);
//     }, 3000);
//     }, 1000);


    

    function step3Done()
     {
        console.log("hello there");
        }
        function step2Done() 
        {
        console.log("hello");
        setTimeout(step3Done, 5000);
        }
        function step1Done() 
        {
        console.log("hi");
        setTimeout(step2Done, 3000);
        }
        
        
        
        
        setTimeout(step1Done, 1000);  //this is the initial call to kick things off.

        
   

// promise version of the above callback hell or promise chaining
        setTimeout Promisified (1000).then(function () {
            console.log("hi");
            return setTimeout Promisified (3000)
            }).then(function () {
            console.log("hello");
            return setTimeout Promisified (5000)
            }).then(function () {
            console.log("hi there");
            });;
            console.log("outside the callback hell");




            setTimeout Promisified (1000).then(function () {
                console.log("hi");
                return setTimeout Promisified (3000)
                }).then(function () {
                console.log("hello");
                return setTimeout Promisified (5000)
                }).then(function () {
                console.log("hi there");
                });;
                console.log("outside the callback hell");



                // AAAAAAAAAAAWAAAAAAAAAAIIIIIIIIITTTTTTTTTT!!!!!



                function setTimeout Promisified(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                    }


                    // syntactic sugar
                    async function solve() {
                    await setTimeout Promisified(1000);
                    console.log("hi");
                    await setTimeoutPromisified(3000);
                    console.log("hello");
                    await setTimeout Promisified (5000);
                    console.log("hi there");
                    }
                    solve();



                   const fs = require("fs");

                    function readFileAsync() 
                        {
                        return new Promise(function(resolve)
                         {
                        fs.readFile("a.txt", "utf-8", function(err, data) {
                        resolve(data);
                        })
                        }) 
                        }



                        /// syntactic sugar
                        async function solve() {
                        await readFileAsync (1000);
                        }
                        solve();
                        console.log("after solve function");



                        function readFileAsync() {
                            return new Promise(function(resolve, reject) {
                            fs.readFile("aasdasddassdadas.txt", "utf-8", function(err, data) {
                            // err
                            if (err) {
                            reject("File not found")
                            } else {
                            resolve(data);
                            }
                            })
                            })
                            }
                            



                            readFileAsync()
                            .then(function(x) {
                            console.log("Files has been read" + x)
                            })
                            // its a promise version of try to catch just like in .sort().tolowercase() in array and the canonical form is 
                            // function().then() {thats a promise}

                            .catch(function(e) {
                                console.log("error")
                            console.log(e);
                            })



                            //  it will print error
                            // and file not found
                              