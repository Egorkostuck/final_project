import logo from './logo.svg';
import './App.sass';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import {Provider} from 'react-redux';
import Store from './State/Store';

function App() {
  console.log(Store);
  return (
    <HashRouter>
      <Provider store={Store}>
        <Header />
        <section className='body'>
          <Switch>
            <Route extend path = '/'>
              <Dashboard />
            </Route>
          </Switch>
        </section>   
      <Footer />
      </Provider>    
    </HashRouter>
  );
}

export default App;
