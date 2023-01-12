
import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";



//CSS
import './App.css';// //Bootstp CSS
import 'bootstrap/dist/css/bootstrap.min.css'



//Coponents
import Navbar from './components/Navbar';
import Footer from './components/Footer';


//pages
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';


function App() {

  return (
   
<BrowserRouter>
   <div>
      <Navbar />
     
      <main>
    {/* <About /> */}
        <section>
          {/* <Projects /> */}
        </section>
      
        </main> 
      <div>
        <Footer />
      </div>
    </div >

    <Routes>
                    {/* <Route exact path="/" element={<Home />} /> */}
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Projects" element={<Projects />} />
                    <Route exact path="/Resume" element={<Resume />} />

                </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;