
import React from 'react';


//CSS
import './App.css';



//Coponents
import Navbar from './components/Navbar';
import Footer from './components/Footer';


//pages
import Projects from './pages/Projects';


function App() {
  
  return (
    <div>
      <Navbar/>
      <section>
      <Projects/>
        </section>
      <div>
      <Footer/>
        </div>
    </div>
  );
}

export default App;