import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

function Home () {
const {data : articles} = useFetch('')

    return (
        <div className="home">
          { articles &&  <ArticleList articles={articles} title="Articles" /> }
        </div>
    )
}
 
export default Home;