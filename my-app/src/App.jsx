import {useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(function(){
    const intervalId = setInterval(function(){
      setCount(count => count + 1)
    }, 1000); // 1000ms = 1 second

    return function(){
      clearInterval(intervalId); // this is what is run when the react unmounts 
    };
  }, []);

  return <div>
    <b>{count}</b>
  </div>;
}

export default App;