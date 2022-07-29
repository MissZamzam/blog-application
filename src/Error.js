import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="not-found">
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default Error;