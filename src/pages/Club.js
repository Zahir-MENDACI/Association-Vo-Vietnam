import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../config/Context/ThemeContext';

const Club = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
            <div className="Club">
                
            </div>
        </div>
    );
};

export default Club;