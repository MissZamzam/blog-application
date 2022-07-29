
import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

function Home () {
    const { error, isPending, data: articles } = useFetch('http://localhost:3000/articles')

    return (
        <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { articles && <ArticleList articles={articles} /> }
      </div>
    )
}
 
export default Home;