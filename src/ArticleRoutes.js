import { useParams } from "react-router-dom";

function ArticalRoutes () {
    const {id} = useParams()
    return (
        <div className="article-details">
            <h2>Details - {id}</h2>
        </div>
    )
}
 
export default ArticalRoutes;