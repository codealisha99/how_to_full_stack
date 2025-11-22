import {useState , useEffect} from 'react';
import { UseFetch } from './usefetch';


function App(){
    
    

    
    useEffect( () => {
        UseFetch();
    }, [] );
    
    
    return <div>
        hii
    </div>
}



export default App;