import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

function Home () {

    const [articles, setArticles] = useState(null)

    
    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(response => {
            response.json()
        })
        .then(data => {
            setArticles(data)
        })
    })

    return (
        <div className="home">
          { articles &&  <ArticleList articles={articles} title="Articles" /> }
        </div>
    )
}
 
export default Home;