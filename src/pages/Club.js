import React, { useContext } from 'react';
import { ThemeContext } from '../config/Context/ThemeContext';

const Club = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Club">
                
            </div>
        </div>
    );
};

export default Club;