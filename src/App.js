import {HashRouter, Routes, Route, useLocation}from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs.js';
import Information from './components/Information.js';
import OurWork from './components/OurWork.js';
import Testimonials from './components/Testimonials.js';
import Home from './components/Home.js';
import Navbar from './header/Navbar';



function App() {
 return (
  <>
  <HashRouter>
        <Navbar/>
        <Home/>
  </HashRouter> 
</>
  );
}

export default App;
