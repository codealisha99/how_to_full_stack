import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";




function routing() {


return <div>
    <BrowserRouter>
   <Link to="/"> Home </Link> 
   |
    <Link to="/lala"> Landing Page </Link> 

    <Routes>
    <route path="/" element={<Layout/>}></route>
    <Route path="/" element={<GetThis/>}> </Route> 
    <Route path="/lala" element={<Landing/>}> </Route> 
    <Route path="*" element={<Errorpage/>}> </Route> 
    </Routes>

</BrowserRouter>



</div>


}

//1
function Errorpage(){
    return <div>
        404 error page not found
    </div>
}
//2
function GetThis(){
    return <div>
        hi there
    </div>
}

//3
function Landing(){
    const navigate = useNavigate();


    function reDirect(){
        navigate("/");
    }

    
    return <div>
        welcome to landing page
        <button onClick={reDirect}>TRAVELING BACK</button>
    </div>
}


//4
function Layout(){
    return <div>
        <h1>This is the layout page</h1>
        <outlet />
    </div>
}




export default routing;

//react is highhhhhhhhhhhhhhlyyyy case sensitive;