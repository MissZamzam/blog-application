import {Link} from 'react-router-dom'

function Navbar () {
    return (

        <div className="navbar">
            <h1>The WEEKLY <p>Blog </p></h1>
        <div className="container">
            <ul>
          <Link to="/" className='nav-links'>Home</Link>
          <Link to="/create" className='nav-links'>New Blog </Link>
          <Link to="about" className='nav-links'>About</Link>
          <Link to="contact" className='nav-links'>Contact </Link>
          <Link to="/more" className='resource'>Resources</Link>
          </ul>
        </div>
        </div>

    )
}
 
export default Navbar;