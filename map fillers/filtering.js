//same as map filter but we will filter the values based on some condition like a filtering logic through which only the selected values can pass through.
//filter is the also a method of mapping the input with the logic or the call back function.


const input = [1,2,3,4,5,];



const newarr = [];

// for(let i=0; i<input.length; i++){
//     if(input[i] % 2 === 0){
//         newarr.push(input[i]);
//     }
// }

// console.log(newarr);


const ans = input.filter((i) =>  {
    if(i % 2 === 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);