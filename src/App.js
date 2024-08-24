import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Service from './Service';
import SignUpForm from './SignUpForm';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <div>
      <Router>
      <Navbar />
      <div className="content">
        <Routes>
            <Route path="/" element={<h1>
              <SignUpForm /></h1>} />
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
