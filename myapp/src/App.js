import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/breadHome';
import Menu from './Components/breadMenu';
import About from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
        </div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container text-center">
            © {new Date().getFullYear()} FoodCo. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
