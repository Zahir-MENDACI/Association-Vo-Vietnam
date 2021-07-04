import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data'
import { ThemeContext } from '../config/Context/ThemeContext';
import photo from '../images/images.png'


const Membres = () => {

    const {theme} = useContext(ThemeContext) 
    return (
            <div className={theme ? "contenu light" : "contenu dark"}>
                <Navbar />
                <div class="Coach">
                    <div className="cardsContainer">
                        {data.map((dat) => 
                        {
                            return(
                                <div className="card">
                                    <img src={photo}/>
                                    <h4>{dat.nom}</h4>
                                    <h6>{dat.poste}</h6>
                                    <p>{dat.desc}</p>
                                </div>           
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Membres
