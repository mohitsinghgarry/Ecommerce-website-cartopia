import './App.css'
import{ NavBar} from './components/NavBar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Products } from './components/Products';
import { About } from './components/About';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { ErrorPage } from './components/ErrorPage';
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { SingleProduct } from './components/SingleProduct';
import { AppContext } from './context/AppContext';
function App() {
  const {fetchFullData} = useContext(AppContext);
  useEffect(()=>{
      fetchFullData();
  },[])
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path= '/About' Component={About}/>
          <Route path ='/Products' Component={Products}/>
          <Route path='/ContactUs' Component={ContactUs} />
          <Route path='/SingleProduct/:id' Component={SingleProduct} />
          <Route path='/Cart' Component={Cart} />
          <Route path='*' Component={ErrorPage}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )   
}

export default App;
