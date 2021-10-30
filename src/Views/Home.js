
import useFetch from "../Custom_Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const {data: blogs, error, isLoading} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList title="All Blogs" blogs={blogs} />}
        </div>
    );
}
 
export default Home;