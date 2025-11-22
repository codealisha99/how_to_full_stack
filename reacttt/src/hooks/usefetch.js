import {useState, useEffect} from 'react';






export function UseFetch(url){
    const [post , setPost] = useState({});

   async function getpost(){
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        setPost(data);
        console.log(data);
    }
    useEffect(() => {
        getpost();
    }, []);


    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
}