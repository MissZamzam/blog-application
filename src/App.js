import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />

      </div>
    </div>
  );
}

export default App;
