import {useState, createContext} from 'react';



const BulbOn = createContext();

function App(){
     return <div>
        <LightBulb/>
     </div>
}


function LightBulb(){
    const [BulbOn, setBulbOn] = useState("true");
    return <div>
        <StartStop BulbOn={BulbOn} />
        <Toggle setBulbOn= {setBulbOn}/>     //it should always be caps and camelcasing
    </div>
}


function StartStop(BulbOn){


    return <div>
         {BulbOn ? "bulb on" : "bulb off" }
    </div>
}


function Toggle(setBulbOn){
    return
}











export default App;