import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function ArticalRoutes () {
    const {id} = useParams()
    const {data : article} = useFetch('http://localhost:3000/articles' + id)
    return (
        <div className="article-details">
            {article && (
                <piece>
                    <h2>{article.title}</h2>
                    <p>By{article.author}</p>
                    <div>{article.body}</div>
                </piece>
            )}
        </div>
    )
}
 
export default ArticalRoutes;