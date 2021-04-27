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
import Mixers from './Components/Catalog/mixer/Mixers';
import Plate  from './Components/Catalog/Plate/Plate';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const successToast = (text) => {        
    toast.success(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });        
  };

  console.log(Store);
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
        <section className='body'>
          <Switch>
            <Route exact path = '/'>
              <Dashboard successToast={successToast}/>
            </Route>
            <Route exact path='/catalog-sink'>
              <Sink successToast={successToast}/>
            </Route>
            <Route exact path='/catalog-mixers'>
              <Mixers successToast={successToast}/>
            </Route>
            <Route exact path='/catalog-plate'>
              <Plate successToast={successToast}/>
            </Route>
            <Route exact path='/cart'>
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
