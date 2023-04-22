import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 Page Not Found</p>
        <Link to='/'><button>Go Back..</button></Link>
          </div>
    );
}
 
export default NotFound;