import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ServiceSection from './pages/ServiceSection';
import {CookiesProvider} from 'react-cookie'

function App() {
  return (
    <CookiesProvider>
    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
          <Route path="/servicesection" component={ServiceSection} exact/>

      </Switch>    
    </Router>
    </CookiesProvider>
  )
}

export default App;
