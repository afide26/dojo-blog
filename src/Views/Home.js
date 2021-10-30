import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const [isLoading,setLoading] = useState(true)
 
    useEffect(()=>{

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
                setLoading(false);
            })
        },1000)
    },[])
    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList title="All Blogs" blogs={blogs} />}
        </div>
    );
}
 
export default Home;