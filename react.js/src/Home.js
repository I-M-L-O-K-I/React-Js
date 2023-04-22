import { Link } from 'react-router-dom';

const Home = () => {

    return ( 
        <div className="links">
            <h2>My new page</h2>
            <Link to="/" id='home' style={{
                backgroundColor : '',
                color: 'black',
                borderRadius: '3px'
            }} >Home</Link>
            <Link to="/create" style={{
                backgroundColor:'red',
                color: 'white',
                borderRadius: '3px'
            }}>New blog</Link> 
        </div>
     );
}
 
export default Home;