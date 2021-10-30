import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsPending(false)
            console.log('Blog added.')
        })
    }

    return (
        <div className="create">
            <h2>Add a new entry</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Add a title to your entry"
                    required
                    onChange = {(e)=>setTitle(e.target.value)}
                    />
                <label htmlFor="body">Text body:</label>
                <textarea 
                    name="body" 
                    id="body"
                    required
                    onChange={e=>setBody(e.target.value)}
                    />
                <label htmlFor="select-author">Select the author name:</label>
                <select 
                    name="select-author" 
                    id="select-author"
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add new entry</button>}
                {isPending && <button disabled>Adding new entry...</button>}
            </form>
        </div>
    );
}
 
export default Create;