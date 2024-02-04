import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// imported components
import Header from './Pages/Header.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
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
