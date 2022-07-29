import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import ArticalRoutes from './ArticleRoutes';
import Error from './Error'

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container">
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/articles/:id" element={<ArticalRoutes />} />
            <Route exact path="*" element={<Error />} />
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
