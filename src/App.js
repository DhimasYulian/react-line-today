import { AppContext } from './context';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useContext } from 'react';
import Home from './pages/Home';
import Bookmarked from './pages/Bookmarked';

const App = () => {
  const {pages} = useContext(AppContext)
  return (
    <div className="bg-gray-200 min-w-full min-h-screen">
      <div className="max-w-screen-md mx-auto" >
          <Router>
            <Switch>
              {
                pages && pages.map(page => (
                  <Route exact path={`/${page.name}`} component={Home} />
                ))
              }
              <Route exact path="/" component={Home} />
              <Route exact path="/bookmarked" component={Bookmarked} />
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
