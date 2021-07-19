import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../config/Context/ThemeContext';

import dateFns from "date-fns";


const Planning = () => {
    const {theme} = useContext(ThemeContext) 
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Planning">
                <div className="groupe1">
                    <h1>Groupe 1</h1>
                    <p>Dimanche:   /</p>
                    <p>Lundi:   /</p>
                    <p>Mardi:   15h00 - 17h00</p>
                    <p>Mercredi:   /</p>
                    <p>Jeudi:   /</p>
                    <p>Vendredi:   /</p>
                    <p>Samedi:   15h00 - 17h00</p>
                </div>
                <div className="groupe2">
                    <h1>Groupe 2</h1>
                    <p>Dimanche:   /</p>
                    <p>Lundi:   /</p>
                    <p>Mardi:   /</p>
                    <p>Mercredi:   17h30 - 19h30</p>
                    <p>Jeudi:   /</p>
                    <p>Vendredi:   17h30 - 19h30</p>
                    <p>Samedi:   17h30 - 19h30</p>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
};

export default Planning;