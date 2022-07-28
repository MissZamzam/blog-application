import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function ArticalRoutes () {
    const {id} = useParams()
    const {data : article} = useFetch('http://localhost:3000/articles' + id)

    function handleDelete(){
        fetch('http://localhost:3000/articles/' + article.id,{
            method: 'DELETE',
        }).then((response) => response.json())
        .then(() => console.log('deleted'))
            
        }

    
    return (
        <div className="article-details">
            {article && (
                <piece>
                    <h2>{article.title}</h2>
                    <p>By{article.author}</p>
                    <div>{article.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </piece>
            )}
        </div>
    )
}
 
export default ArticalRoutes;