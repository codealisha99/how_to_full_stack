import {useState, useEffect} from 'react';



function App(){
       const [count, setCount] = useState (0);

     
     
       function incrementCount(){
          setCount(count => count + 1);
        }

useEffect( function (){
    incrementCount();
}, []);


       return <div>
              <div style={{display : "flex"}}>
                <div style={{background : "red", borderRadius : 20 , width : 20, height : 25, paddingleft :10, paddingTop : 5}}>
                    {count}
                </div>
              </div>


        <img style={{cursor: "pointer"}}
          alt="Bell"
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICTyb--kFAOwi6h1Iegop9E-U3cLOvJbRfQ&s"}
          width={100}
          />
        <button  onClick={incrementCount}>click me</button>
       </div>
}



export default App;













/* function App(){
    return <div>
    hi there
    <greeting name={"alisha"} /> issk ander jo aaya woh directly is the prop or argument ofthe props of the greating 


    </div>


    outside the return div we tried to defin a function ad then we call it 
    function greeting(props){
        return <div>
        hi <there>{props.name}</div>
    }
    ]
} */