import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, useHistory } from 'react-router-dom';
import { ThemeContext } from '../config/Context/ThemeContext';
import { useAlert } from "react-alert";



const Home = (props) => {
    const d = new Date()
    const history = useHistory()
    const {theme} = useContext(ThemeContext) 
    console.log(props.match.params.params)
    const alert = useAlert();

    if (props.match.params.params === "succeed")
    {
        alert.success("Payement réussi!")
    }
    if (props.match.params.params === "canceled")
    {
        alert.error("Payement annulé!");
    }
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <Navbar/>
                <div className="Home">
                    <div className="homeContent">
                        {/* <img src={Logo}/>
                        <div class="btndiv">
                            <button class="button" onClick={() => history.push('/planning')}>Consulter planning</button>
                            <button class="button" onClick={() => history.push('/abonnement')}>Prendre un abonnement</button>
                        </div> */}
                    </div>
                

                <div className="CoachHome">
                    <h1>Association Vo Vietnam</h1>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores expedita quos quae officia ab ratione consectetur corrupti rerum aliquid? Animi enim quibusdam aut esse blanditiis repellendus ut modi nostrum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat blanditiis porro suscipit veniam quas quidem quasi vel! Architecto, deserunt molestias soluta atque nobis, suscipit ullam non hic commodi vero obcaecati.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, earum, molestias perferendis corporis assumenda eaque sapiente eum accusamus, repellendus et beatae. Veritatis voluptate blanditiis quod quidem earum. Repellat, excepturi fugiat!
                        </p>
                    </div>
                    {/* <div className="coachs">
                        <div className="div">
                            <img src={photo1}/>
                            <h2>Novak Djokovic</h2>
                        </div> 
                        <div className="div">
                            <img src={photo2}/>
                            <h2>Serena Williams</h2>
                        </div> 
                    </div>
                    <NavLink exact to = "/coach">Plus de details</NavLink>  */}
                </div>
{/*                 
                <div className="planningHome">
                    <h1>Evenements</h1>
                    <div className="content">
                        <div className="today">
                            <h3>Aujourd'hui le {`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}:`}</h3>
                            <p>--Evenement d'aujourd'hui--</p>
                        </div>
                        <div className="later">
                            <h3>Prochain evenement le {`${d.getDate()+2}/${d.getMonth()}/${d.getFullYear()}:`}</h3>
                            <p>--Le prochain evenement--</p>
                        </div>
                    </div>
                    <NavLink exact to = "/planning">Plus de details</NavLink>
                </div> */}
                </div>
            <Footer />
                {/* <Banner />
                <Info />
                <Coach /> */}
        </div>
    );
};

export default Home;