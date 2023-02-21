import { useState } from "react";
import { useNavigate} from "react-router-dom";
// import { NavLink } from "react-router-dom"




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
        <form onSubmit={handleSubmit} className="form">
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
            {/* <NavLink to='/'> */}
            <button className="button">Submit article</button>
            {/* </NavLink> */}

           </fieldset>

        </form>

        <h3>The Weekly</h3>
        <p className="footer">
        At The WEEKLY, it’s no secret that we love writing . . . and writers! We particularly love when writers share their insights on writing, revising, and the day-to-day experience of being a writer because it gives us glimpses into how their perspectives shape their work.          </p>

    </div>
}
 
export default Create;