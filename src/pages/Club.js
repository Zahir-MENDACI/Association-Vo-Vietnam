import React, { useContext } from 'react';
import { ThemeContext } from '../config/Context/ThemeContext';

const Club = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Club">
                <h1>
                    Ecole de Vo-Vietnam Son Long Quyen Thuat Azazga
                </h1>
                <p>
                    Maître CHAIB Rachid ayant commencé sa carrière depuis l'année 1980, ce qui équivaut à plus de 40 ans de pratique dans cet art martial, formé par les meilleurs maitres du Vo-Vietnam, en citant parmis ces maitres, BARBEY Olivier qui est actuellement à la tête de la Fédération Internationale de Vo-Vietnam. Il est titulaire d'un grade de "Trung Dung 3" qui lui a été attribué par la Fédération Internationale de Vo-Vietnam, il a été designé par cette dernière comme étant un membre de la commission technique internationale, et le représentant officiel du Vo-Vietnam en Algérie.
                </p>
                <p>
                    Durant sa carrière, il a contribué à l'évolution de cet art martial en Algérie, en ayant dirigé plusieurs salle et formé plusieurs Vo Sinh de haut niveau. Durant ces dernières années, son activité s'était majoritairement basée dans sa propre salle situé à Azazga, comme étant le representant officiel du Vo-Vietnam en Algérie, sa salle était consideré la source principal du savoir de cet art martial grace à ses competences techniques et sa communication et collaboration continue avec la federation internationale.
                </p>
                <p>
                    
                    Après une longue carriere dans cet art, en 2021, malgré la situation sanitaire que vit la planete à cause du covid-19, CHAIB Rachid a décidé de faire un nouveau pas dans sa carriere qui est de depasser la limite d'une simple salle, il a dû former une equipe d'athletes competents et motivés à ameliorer l'apprentissage de cet art martial, il a donc decidé officielement de fonder sa propre école nommée "école de Vo-Vietnam Son Long Quyen Thuat Azazga" sise au CSP d'Azazga et qui sera en relation direct avec la féderation internationale dirigée par lui meme et a positionné IBERCIENE Akli comme responsable administratif
                    Avec la situation sanitaire actuelle, les entrainements sont assurés en plein air, tout en respectant les restrictions sanitaire.
                </p>
            </div>
        </div>
    );
};

export default Club;