import Bloglist from "./blogList";
import useFetch from "./useFetch";


const   Wolf = () => {
  const {data:blogs , isPending , error} = useFetch('http://localhost:8000/blogs')
    return (
      <nav className="Navbar">
        { error && <div> { error } </div> }
        { isPending && <div>Loading....</div>}
{ blogs && <Bloglist blogs={blogs} title = 'All blogs'  />}
      </nav>
      );
}
 
export default Wolf;