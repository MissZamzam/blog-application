
import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

function Home () {
    const { error, isPending, data: articles } = useFetch('https://my-blog-appl.herokuapp.com/articles')

    return (
        <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { articles && <ArticleList articles={articles} /> }
      </div>
    )
}
 
export default Home;