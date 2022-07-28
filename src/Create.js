import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        const article = { title, body, author };

        fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(article)
        }).then
        (() => {
        })

    }
    
    return <div className="create">
        <h2>Create a New article</h2>
        <form onSubmit={handleSubmit}>
            <br></br>
            <label>Title</label>
            <input type="text" placeholder="Title of the article" required  value={title} onChange={(e) =>setTitle(e.target.value)}/>
            <br></br>
            <label>Body</label>
            <input type="text" className="textarea" placeholder="Write article here!" required value={body} onChange={(e) =>setBody(e.target.value)}/>
            <br></br>

            <label>Author</label>
            <input type="text" placeholder="Your name" required value={author} onChange={(e) => setAuthor(e.target.value)} />
            <br></br>
           <button className="button">Add</button>

        </form>
    </div>
}
 
export default Create;