import {useState, createContext, useContext} from 'react';



const BulbOn = createContext();


function Pantry({children}){
     [BulbisOn, setBulbisOn] = useState();
     return (
    <BulbOn.Provider  value={{BulbisOn,setBulbisOn}}>
        {children}
    </BulbOn.Provider>
     )
}


function App(){
     return <div>
         <Pantry>
        <LightBulb/>
        </Pantry>
     </div>
}


function LightBulb(){
    
    return <div>
        <StartStop />
        <Toggle />     //it should always be caps and camelcasing
    </div>
}


function StartStop(){
const {BulbisOn} = useContext(BulbOn);

    return <div>
       return <h2>The bulb is {BulbisOn ? "💡 ON" : "🌑 OFF"}</h2>;


    </div>
}


function Toggle(){
    const {setBulbisOn} = useContext(BulbOn);
    return <div>
        <h2> The bulb is {setBulbisOn ? "ON" : "OFF"}</h2>
    </div>
}











export default App;