function ArticleList  ({articles, title, handleDelete}) {

  

    return (  
        <div className="articleList">
            <h1>{title}</h1>
            {articles.map((article) =>(
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <button onClick={() => handleDelete(article.id)} className="delete">Delete</button>
                    </div>
            ))}
        </div>

    )
}
 
export default ArticleList;