import { useNavigate,useParams } from "react-router-dom";
import useFetch from "./useFetch";

function ArticalRoutes () {
    const {id} = useParams()
    const {data : article, error, isPending} = useFetch('https://my-blog-appl.herokuapp.com/articles/' + id)
    const navigate = useNavigate()

    function handleDelete(){
        fetch('https://my-blog-appl.herokuapp.com/articles/' + article.id,{
            method: 'DELETE',
        }).then(() => {
            navigate.push('/');
          }) 
        }
        return (
            <div className="article-details">
                  { isPending && <div>Loading...</div> }
                  { error && <div>{ error }</div> }
                 {article && (
                    <art>
                        <h2>{ article.title }</h2>
                        <p>By { article.author }</p>
                        <div>{ article.body }</div>
                         <button onClick={handleDelete}>Delete</button>
                </art>
                )}
            </div>
        )
    }
    

export default ArticalRoutes;