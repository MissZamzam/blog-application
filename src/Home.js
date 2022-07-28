import { useState } from "react";
import ArticleList from "./ArticleList";

function Home () {

    const [articles, setArticles] = useState([
        {title: 'My vacation to MiddleEast', body: 'abhk...', author: 'Mike John', id:1},
        {title: 'Politics in Fashion Industry', body: 'abhk...', author: 'Miriam Williams', id:2},
        {title: 'My journey as a developer', body: 'abhk...', author: 'Wendy Joseph', id:3},
        {title: 'Favorite cookbook', body: 'abhk...', author: 'Jerry Simon', id:4}

    ])
    return (
        <div className="home">
            <ArticleList articles={articles} title="Articles " />
        </div>
    )
}
 
export default Home;