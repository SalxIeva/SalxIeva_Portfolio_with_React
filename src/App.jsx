import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// imported components
import Header from './Pages/Header';
import About from './Pages/About';
// import Skills from './Pages/Skills';
// import ProjectsPage from './Pages/ProjectsPage';
// import Project from './Pages/Project'


function App() {
  // set up router
 return (
    <Router>
        <div>
            
            <Header />
            <About />
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
