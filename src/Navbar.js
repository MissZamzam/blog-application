import {Link} from 'react-router-dom'

function Navbar () {
    return (

        <div className="navbar">
            <h1>The WEEKLY <p>Blog </p></h1>
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog </Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact </Link>
          <Link to="/more">Resources</Link>
        </div>
        </div>

    )
}
 
export default Navbar;