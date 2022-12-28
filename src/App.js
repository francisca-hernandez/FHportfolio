
import React from 'react';


//CSS
import './App.css';



//Coponents
import Navbar from './components/Navbar';
import Footer from './components/Footer';


//pages
import Projects from './pages/Projects';
import About from './pages/About';


function App() {

  return (
   

   <div>
      <Navbar />
     
      <main>
    <About />
        <section>
          <Projects />
        </section>
      
        </main> 
      <div>
        <Footer />
      </div>
    </div >
   
    
  );
}

export default App;