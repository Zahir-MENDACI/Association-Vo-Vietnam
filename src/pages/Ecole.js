import React, { useContext } from 'react';
import { ThemeContext } from '../config/Context/ThemeContext';

const Ecole = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Ecole">
                <h1>Presentation du Vo-Vietnam</h1>
                <p>
                    Le Vô Viêt Nam est un sport de combat, dont l'apparition au Viêtnam remonte à fort longtemps.
                    Il s'est enrichi grâce aux techniques de combat pratiquées essentiellement par des chefs guerriers et des moines bouddhistes.
                    Actuellement, le Vô Viêt Nam est devenu un sport de masse
                    largement pratiqué par tous.
                </p>
                <h3>Les principes du Vo-Vietnam</h3>
                <p>
                    Le Vô Viêt Nam est, dans son essence, un art de se vaincre sois-même. Cette définition peut
                    paraître paradoxale, sinon curieuse, si l'on se réfère à l'imaginaire populaire qui se fait une
                    certaine idée sur les pratiquants des arts martiaux, présentés généralement comme des personnes
                    agressives et "qui font peur".

                    En réalité, les Vo-Sinhs ( pratiquants ) sont plutôt des hommes
                    qui cherchent à forger leur volonté et faire reculer au maximum les limites de l'effort physique.

                    Le fondement essentiel du Vô Viêt Nam consiste à attaquer avant tout les bras et les jambes de
                    l'adversaire en vue d'éliminer potentiellement ses posibilités d'attaques et de défenses,
                    et ainsi de permettre, d'atteindre le corps. Le Vô Viêt Nam recèle une grande variété de mouvements 
                    travaillés en souplesse. Toutes les parties du corps: pieds, mains, coudes, genoux y sont utilisés avec
                    une technique appropriée, soit pour la défense, soit pour l'attaque. Les pratiquants considèrent
                    cette variété technique comme une richesse qui
                    permet à chacun de trouver le style qui lui est propre.
                </p>
                <h3>La Tenue</h3>
                <p>
                    Les pratiquants du Vô Viêt Nam portent traditionnellement des Vo-phucs ( kimonos) de différentes couleurs.
                    Chaque couleur à une signification particulière:
                </p>
                <p>
                    Le Vo-Phuc BLEU:
                    il est porté par les élèves du premier degré SO DANG 1 ( Moat) à SO DANG 4 ( Boan) 
                </p>
                <p>
                    Le Vo-phuc MARRON:
                    Il est porté par les pratiquants du 2ème degré et 3ème degré;
                </p>
                <p>
                    aides-professeurs et professeurs.
                </p>
                <h3>Les enfants et la pratique du Vo-Vietnam</h3>
                <p>
                    Comme chacun le sait, le sport est bon pour la santé, surtout pour les enfants. Il aide leur
                    corps à s'épanouir, les  aide à trouver un bon équilibre de leur système nerveux et il s deviennent plus adroits.

                    Leur énergie est dépensée équitablement; ils prennent confiance
                    et s'expriment mieux.

                    Comme le VÔ n'est pas un sport de force mais utilise largement l'équilibre et
                    la souplesse, il s'adapte bien à la pratique par les enfants. Il leur permet d'acquérir
                    rapidement un bon sens de l'équilibre.

                    Leur don d'imitation et leur souplesse facilitent l'assimilation correcte des attitudes et
                    des gestes technique.
                </p>
            </div>
        </div>
    );
};

export default Ecole;