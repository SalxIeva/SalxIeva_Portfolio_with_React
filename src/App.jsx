import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// imported components
import Header from './pages/Header/Header';
import HomePage from './pages/HomePage';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
// import ProjectsPage from './Pages/ProjectsPage';
// import Project from './Pages/Project'
// import Wrapper from './components/Wrapper';

function App() {
  // set up router
 return (
    <Router>
      <div>
            <Header />
            <HomePage />
            {/* <Wrapper> */}
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        </Routes>
        {/* </Wrapper> */}
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
