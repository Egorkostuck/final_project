import logo from './logo.svg';
import './App.sass';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import {Provider} from 'react-redux';
import Store from './State/Store';
import Sink from './Components/Catalog/Sink/Sink';
import Cart from './Components/Cart/Cart';

function App() {

  console.log(Store);
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
        <section className='body'>
          <Switch>
            {/* <Route path = '/'>
              <Dashboard />
            </Route> */}
            <Route path='/catalog-sink'>
              <Sink />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </section>   
      <Footer />
      </Provider>    
    </BrowserRouter>
  );
}

export default App;
