import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const [isLoading,setLoading] = useState(true)
    const [error, setError] = useState(null);
 
    useEffect(()=>{

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw new Error('could not fetch the data from the resource.')
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setLoading(false);
                setError(null);
            })
            .catch(err=>{
                console.log(err.message)
                setBlogs(null)
                setLoading(false)
                setError(err.message)
            })
        },1000)
    },[])
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList title="All Blogs" blogs={blogs} />}
        </div>
    );
}
 
export default Home;