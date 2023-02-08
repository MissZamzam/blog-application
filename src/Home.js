
import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

function Home () {
    const { error, isPending, data: articles } = useFetch('https://blog-api-production-1310.up.railway.app/articles/')

    return (
        <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { articles && <ArticleList articles={articles} /> }
      </div>
    )
}
 
export default Home;