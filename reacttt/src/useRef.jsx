import {useState} from 'react';




function Clock(){
    const [currentCount, setcurrentCount] = useState(0);



    function startClock(){
        setInterval(function(){
            setcurrentCount(count => count + 1);
        }, 1000);
    }

return <div>
    {currentCount};
    <br />


    <button  onClick={startClock}>START</button>
    <button>STOP</button>
</div>



}




export default Clock;