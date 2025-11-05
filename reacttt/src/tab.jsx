import {useState} from 'react';



function App(){
  const [currentTab, setCurrentTb ] = useState("feed");


    return <div>
        <button onclick={function(){
            setCurrentTb("feed");
        }}style={{ color : currentTab == "feed" ? "red" : "black"}}>feed</button>
        <button onclick={function(){
            setCurrentTb("notification");
        }}style={{ color : currentTab == "notification" ? "red" : "black"}}>notification</button>
        <button onclick={function(){
            setCurrentTb("jobs");
        }}style={{ color : currentTab == "jobs" ? "red" :  "black"}}>jobs</button>
        <button onclick={function(){
            setCurrentTb("blogs");
        }}style={{ color : currentTab == "blogs" ? "red" : "black"}}>blogs</button>
        <button onclick={function(){
            setCurrentTb("profile");
        }}style={{ color : currentTab == "profile" ? "red" : "black"}}>profile</button>
    </div>
}


export default App;