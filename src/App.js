import logo from './logo.svg';
import './App.sass';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path = '/sinks'>
      
      </Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
