function ArticleList  ({articles, title}) {

  

    return (  
        <div className="articleList">
            <h1>{title}</h1>
            {articles.map((article) =>(
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    </div>
            ))}
        </div>

    )
}
 
export default ArticleList;