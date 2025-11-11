import {useState} from 'react';




function counter(){
       const [count, setCount] = useState (0);

    
   



    return <div>
        {count}
        <button onClick={incrementCount}>I add</button>
        <button onClick={decrementCount}>I Substract</button>
        <button onClick={resetCount }>I reset</button>
        

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
  function Limit(){
    if (count >= 10){
       <count style={"red"}></count>
    }
  }
  }







 



export default counter;