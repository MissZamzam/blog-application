import { useState } from "react";

function Home () {

    const [articles, setArticles] = useState([
        {title: 'My vacation to MiddleEast', body: 'abhk...', author: 'Mike John', id:1},
        {title: 'Politics in Fashion Industry', body: 'abhk...', author: 'Miriam Williams', id:2},
        {title: 'My journey as a developer', body: 'abhk...', author: 'Joseph', id:3},
        {title: 'Favorite cookbook', body: 'abhk...', author: 'Jerry', id:4}

    ])
    return (
        <div className="home">
            {articles.map((article) =>(
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    </div>
            ))}
        </div>
    )
}
 
export default Home;