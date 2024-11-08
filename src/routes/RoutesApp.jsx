import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';

const RoutesApp = () => {
    const { theme } = useTheme()
    return (
        <Router>
            <section className={`App ${theme}`}>
            <nav>
                <ul>
                  <li><Link to ='/'>Home</Link></li>  
                  <li><Link to ='/profile'>Profile</Link></li>  
                  <li><Link to ='/myjob'>MyJob</Link></li>  
                </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/myjob' element={<MyJob />}/>
                </Routes>
             </section>
        </Router>
    );
};
    
export default RoutesApp;