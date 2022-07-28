import {Link} from 'react-router-dom'
function Navbar () {
    return (

        <div className="navbar">
            <h1>The WEEKLY Blog </h1>
        <div className="container">
          <Link to="/">Home🏠</Link>
          <Link to="/create">New Blog✍️ </Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact 📱</Link>
        </div>
        </div>

    )
}
 
export default Navbar;