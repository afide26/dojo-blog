import { useParams,useHistory } from "react-router-dom";

import useFetch from "../Custom_Hooks/useFetch";

const BlogDetails = () => {
    const{id} = useParams();
    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)

    const history = useHistory();

    const handleDelete = ()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:"DELETE"
        }).then(()=> history.push("/"))
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {/* When blog is available */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;