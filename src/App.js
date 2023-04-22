import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Services from './Components/Services';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import Ammeter from './Components/Ammeter';
import Voltmeter from './Components/Voltmeter';
import Voltamp from './Components/Voltamp';
import Ammeter1 from './Components/Ammeter1';
import Ammeter2 from './Components/Ammeter2';
import Ammeter3 from './Components/Ammeter3';
import Ammeter4 from './Components/Ammeter4';
import Voltmeter1 from './Components/Voltmeter1';
import Voltmeter2 from './Components/Voltmeter2';
import Voltmeter3 from './Components/Voltmeter3';
import Voltmeter4 from './Components/Voltmeter4';
import Voltamp1 from './Components/Voltamp1';
import Voltamp2 from './Components/Voltamp2';


function App() {
  return (
    <div className="App">
      <NavBar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/ammeter' element={<Ammeter/>} />
        <Route path='/voltmeter' element={<Voltmeter/>}/>
        <Route path='/voltamp' element={<Voltamp/>}/>
        <Route path='/ammeter1' element={<Ammeter1/>}/>
        <Route path='/ammeter2' element={<Ammeter2/>}/>
        <Route path='/ammeter3' element={<Ammeter3/>}/>
        <Route path='/ammeter4' element={<Ammeter4/>}/>
        <Route path='/voltmeter1' element={<Voltmeter1/>}/>
        <Route path='/voltmeter2' element={<Voltmeter2/>}/>
        <Route path='/voltmeter3' element={<Voltmeter3/>}/>
        <Route path='/voltmeter4' element={<Voltmeter4/>}/>
        <Route path='/voltamp1' element={<Voltamp1/>}/>
        <Route path='/voltamp2' element={<Voltamp2/>}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
