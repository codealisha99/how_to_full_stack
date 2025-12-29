//the main function of the map variable is to take an input and map it with the transformer logic and generate the output. its similar to the mathemtical mapping function.




const input = [1,2,3,4,5];


const newarray = [];

// for(let i=0; i<input.length; i++){
//     newarray.push(input[i] * 2);
// }

// console.log(newarray);



//this is the usual and traditional way of doing it
// function WE WILL USE MAPPPPPPP







function transformer(i){
    return i * 2;
}


//Map(input, transformer);


const ans = input.map(transformer);
console.log(ans);


//OR   const ans = input.map(function transformer(i){
    // return i * 2;});



