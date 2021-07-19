import React, { useContext } from 'react';
import { ThemeContext } from '../config/Context/ThemeContext';

const Club = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Club">
                <p>
                    L'école de Vo-Vietnam Son Long Quyen Thuat Azazga est rattachée à l'association Vo-Vietnam Azazga à sa tête comme président IBERCIENE Akli.
                </p>
                <p>
                    L'école de Vo-Vietnam Son Long Quyen Thuat Azazga a été créée officiellement en 2021 par le maître CHAIB Rachid, titulaire d'un grade de "Trung Dung 3" qui lui a été attribué par la Fédération Internationale de Vo-Vietnam, il a été designé par cette dernière comme étant un membre de la commission technique internationale, et le représentant officiel du Vo-Vietnam en Algérie.
                </p>
                <p>
                    Maître CHAIB Rachid ayant commencé sa carrière depuis l'année 19XX, ce qui équivaut à plus de 40 ans de pratique dans cet art martial, formé par les meilleurs maitres du Vo-Vietnam, en citant parmis ces maitres, BARBEY Olivier qui est actuellement à la tête de la Fédération Internationale de Vo-Vietnam.
                </p>
                <p>
                    Durant sa carrière, il a contribué à l'évolution de cet art martial en Algérie, en ayant dirigé plusieurs salle et formé plusieurs Vo Sinh de haut niveau.
                </p>
                <p>
                    Actuellement, il dirige sa salle qui est situé à Azazga, plus précisemment à la sale des arts martiaux située au CSP Azazga.
                    Avec la situation sanitaire actuelle, les entrainements sont assurés en plein air, tout en respectant les restrictions sanitaire.
                </p>
            </div>
        </div>
    );
};

export default Club;