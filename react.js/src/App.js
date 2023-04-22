
import Wolf from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from './create';
import Blogdetails from './blogDetails';
import NotFound from './NotFound';


function App() {

  return (
    <Router>
    <div className='App'>
     <Home />
      <div className="content">
        <Switch>
           <Route exact path = "/">
             <Wolf />
             </Route >
             <Route path = "/create">
              < Create />
             </Route>
             <Route path = "/blogs/:id">
              < Blogdetails />
             </Route>
             <Route path = "*">
              < NotFound />
             </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
