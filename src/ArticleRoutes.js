import { useNavigate,useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { NavLink } from "react-router-dom";

function ArticalRoutes () {
    const {id} = useParams()
    const {data : article, error, isPending} = useFetch('https://blog-api-production-1310.up.railway.app/articles/' + id)
    const navigate = useNavigate()

    function handleDelete(){
        fetch('https://blog-api-production-1310.up.railway.app/articles/' + article.id,{
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
                        <NavLink to='/' className='button'>
                        <button onClick={handleDelete}>Delete</button>

                        </NavLink>
                </art>
                )}
            </div>
        )
    }
    

export default ArticalRoutes;