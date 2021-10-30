import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('')
    return (
        <div className="create">
            <h2>Add a new entry</h2>
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
            <button>Add entry</button>
            <p>{title}</p>
            <p>{body}</p>
            <p className="author">{author}</p>
        </div>
    );
}
 
export default Create;