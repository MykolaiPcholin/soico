import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import './App.css';
import Aromas from './Aromas/Aromas';
import Catalog from './Catalog/Catalog';
import Dicounts from './Discounts/Dicounts';
import FAQ from './FAQ/FAQ';
import LogIn from './LogIn/LogIn';
import Order from './Order/Order';
import SelfMake from './SelfMake/SelfMake';
import Shipping from './Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/soico/about/' element={<About />} />
        <Route path='/soico/catalog/' element={<Catalog />} />
        <Route path='/soico/aromas/' element={<Aromas />} />
        <Route path='/soico/discounts/' element={<Dicounts />} />
        <Route path='/soico/self-make/' element={<SelfMake />} />
        <Route path='/soico/shipping/' element={<Shipping />} />
        <Route path='/soico/faq/' element={<FAQ />} />
        <Route path='/soico/login/' element={<LogIn />} />
        <Route path='/soico/order/' element={<Order />} />
        <Route path='/soico/' element={<Home />} />    
      </Routes>
    </div>
  );
}

export default App;
