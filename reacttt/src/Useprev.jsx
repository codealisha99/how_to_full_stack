import {useState} from 'react';



function App(){
    const[count, newCount]= useState(0);
    const prevCount = usePrev(count);


    return <div>
        <p>{count}</p>
        <button onClick={() => {
            newCount((curr) => curr + 1);
        }}>CLICK ME</button>


    <p>previous count was: {prevCount}</p>

</div>

}


export default App;