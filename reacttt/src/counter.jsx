import {useState} from 'react';




function Counter(){
       const [count, setCount] = useState (0);

    
   



    return <div style={{backgroundColor: count > 10 ? "green" : "#FFDB58",
          padding : "20px"
           }}>
        <h1 style={{color : "#90EE90"}}>Count : {count}</h1>
        <button 
        onClick={incrementCount} 
        style={{backgroundColor: "violet",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "10px 18px 10px",
        margin : "0px 10px",
        cursor: "pointer",
        fontWeight: "bold",
              }}> I add
        </button>
        <button disabled={count===0}
        onClick={decrementCount}
        style={{backgroundColor: "violet",color: "white",border: "none",borderRadius: "8px",padding: "10px 18px 10px",margin : "0px 10px",cursor: "pointer",fontWeight: "bold",opacity: count === 0 ? 0.6 : 1
              }}>I Substract</button>
       
       
       
       
       
        <button 
        onClick={resetCount }

         style={{backgroundColor: "violet",
         color: "white",
         border: "none",
         borderRadius: "8px",
         padding: "10px 18px 10px",
         margin : "0px 10px",
         cursor: "pointer",
         fontWeight: "bold",
               }}>
                I reset
                
                
        </button>
        

    </div>

  function incrementCount(){
    setCount(count => count + 1);
  }
  function decrementCount(){
    setCount(count => count - 1);
  }
  function resetCount(){
    setCount(0);
  }
  




}

 



export default Counter;