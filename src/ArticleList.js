import { Link } from "react-router-dom";

function ArticleList ({articles}) {
    return (  
        <div className="articleList">
            {articles.map((article) =>(
                <div className="article-preview" key={article.id}>
                    <Link to={`/articles/${article.id}`}>
                    <h2>{article.title}</h2>
                    </Link>
                    <p>By {article.author}</p>
                    </div>
            ))}
        </div>

    )
}
 
export default ArticleList;