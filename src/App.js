import './App.scss';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Slider from './components/Slider/Slider';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Projects />} />
          {/* <Route path='/projects/:id' element={<ProjectItem />} /> */}
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;