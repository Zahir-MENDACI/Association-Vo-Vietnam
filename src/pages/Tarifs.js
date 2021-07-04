import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../config/Context/ThemeContext';

const Tarifs = () => {
    const {theme} = useContext(ThemeContext) 
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
            <div className="Tarifs">
                <div className="cardsContainer">
                    <div className="card">
                        <div className="titreGroupe">
                        </div>
                        <h3 name='groupe'>Tarif Groupe 1</h3>
                        <p>personnes 18 ans et moins</p>
                        <h1>800 DA</h1>
                    </div>
                        <div className="card">
                        <div className="titreGroupe">
                        </div>
                        <h3>Tarif Groupe 2</h3>
                        <p>personnes plus de 18 ans</p>
                        <h1>1000 DA</h1>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Tarifs;