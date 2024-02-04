import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// imported components
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Skills from './pages/Skills';
// import ProjectsPage from './Pages/ProjectsPage';
// import Project from './Pages/Project'


function App() {
  // set up router
 return (
    <Router>
        <div>
            
            <Header />
            <HomePage />
            <About />
            <Skills />
        </div>
    </Router>
  )
  // render header component
  // switch between routes?
  // home route (about componen)
  // skills route
  // projects route
  // contact route 
   
}

// export app
export default App;
