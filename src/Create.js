import { useState } from "react";
import { useNavigate} from "react-router-dom";



const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();



    function handleSubmit(e){
        e.preventDefault()
        const article = { title, body, author };

        fetch('https://blog-api-production-1310.up.railway.app/articles/', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(article)
        }).then(() =>{
            navigate.push('/')
        })

    }
    
    return <div className="create">
        <form onSubmit={handleSubmit} className>
            <fieldset className="fieldset">
    <legend><strong>create a new article✍🏿 </strong></legend>
            <br></br>
            <label><strong>Title</strong></label>
            <input
             type="text" 
             placeholder="Title of the article"
              required 
               value={title} 
               onChange={(e) =>setTitle(e.target.value)}/>
            <br></br>

            <label><strong>Body</strong></label>
            <input 
            type="text" 
            className="textarea" 
            placeholder="✍️" 
            required 
            value={body}
             onChange={(e) =>setBody(e.target.value)}/>
            <br></br>

            <label><strong>Author</strong></label>
            <input type="text" className="author"
            placeholder="🙎"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
                
            </input>
           <button className="button">Add</button>
           </fieldset>

        </form>
    </div>
}
 
export default Create;