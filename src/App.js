import logo from './logo.svg';
import './App.sass';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path = '/sinks'>
      
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
