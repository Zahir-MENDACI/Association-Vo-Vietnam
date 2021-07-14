import React, { useContext } from 'react';
import { ThemeContext } from '../config/Context/ThemeContext';

const Ecole = () => {

    const {theme} = useContext(ThemeContext) 
    
    return (
        <div className={theme ? "contenu light" : "contenu dark"}>
            <div className="Ecole">
                <h1>L'école de Võ-Việt-Nam Sơn Long Quyền Thuật</h1>
                <h3>Généralités :</h3>
                <ul>
                    <li>La F.I.V.V est régie par des statuts internationaux.</li>
                    <li>Chaque pratiquant doit être inscrit dans un club affilié à la F.I.V.V</li>
                    <li>Il doit respecter le règlement interne de l’école.</li>
                    <li>Les professeurs doivent être en possession d’un diplôme international valide.</li>
                    <li>Les diplômes doivent être renouvelés chaque année lors des contrôles techniques.</li>
                    <li>Le Maître ou la Commission Technique Internationale peuvent décerner à titre exceptionnel un diplôme permanent, notamment à des professeurs pratiquant depuis de nombreuses années.</li>
                    <li>Il peut également exister des arrangements pour les pays étrangers éloignés du Maître et du siège de la Commission Technique Internationale.</li>
                    <li>Toute création de nouveau cours ou ouverture d’une nouvelle section fait l’objet d’une demande à la Commission Technique du pays concerné, lequel peut refuser si les conditions ne lui semblent pas favorables</li>
                </ul>
                <h3>Organisation de l’école Sơn Long Quyền Thuật</h3>
                <h3>Les élèves :</h3>
                <p>Niveau So Dang (élémentaire) 1-2-3</p>
                <p>Ils sont répartis en cinq groupes :</p>
                <ul>
                    <li>Débutants</li>
                    <li>Premier</li>
                    <li>Deuxième</li>
                    <li>Troisième</li>
                    <li>Quatrième</li>
                </ul>
                <p>
                    Les passages de grades se font dans les sections par un professeur ou lors des contrôles techniques officiels. A chaque niveau correspond un programme précis de mouvement [cf. chapitre Technique]. Il faut compter à peu près un an de pratique par niveau. Les élèves portent un costume bleu, ils sont considérés comme externes à l’école. Ce début d’apprentissage permet au professeur d’évaluer les qualités morales et techniques de l’élève qui va se familiariser à cette technique en construisant ses fondations. Positions, frappes, parades, Thao simples ; l’élève développe son corps et son mental par la patience et la persévérance. Après quelques années de pratique régulière le Võ-sinh aura acquis le programme élémentaire, soit quatre Thaos, trois séries, les coups de pieds de base et les applications de ces mouvements. Il peut décider de rester externe et continuer à travailler le même programme ou se présenter à l’examen d’élève-professeur.
                </p>
                <h3>Les élèves-professeurs :</h3>
                <p>Niveau Trung Dang (moyen) C-B-A</p>
                <p>Les conditions requises pour être candidat au premier diplôme d’élève-professeur</p>
                <ul>
                    <li>Avoir un niveau So Dang 3 confirmé</li>
                    <li>Désirer s’investir dans l’école en enseignant le Võ et en aidant dans les tâches quotidiennes ou ponctuelles de sa section</li>
                </ul>
                <p>
                    Ce passage de grade se faisait obligatoirement devant le Maître et la Commission Technique Internationale. Maintenant il ne se fait plus que devant la Commission Technique Internationale.

                    C’est un moment très important pour un Võ-sinh, car symboliquement il va devenir interne à l’école et revêtir le costume marron. Le bon esprit, l’humilité, le courage, la persévérance, la loyauté dont il fait preuve sont pris en compte au même titre que sa capacité technique, car plus le pratiquant monte en grade, plus son mental doit s’élever. S’il passe l’examen, l’élève professeur reçoit son premier diplôme. Il devra signer un engagement écrit envers l’école Sơn Long Quyền Thuật [cf. feuille d’engagement]. La tradition veut qu’il organise une petite fête avec ses professeurs, qu’il rejoint dans l’école interne. Il aura progressivement accès au programme professeur et à l’étude plus approfondie du combat.
                </p>
                <h3>Les professeurs :</h3>
                <p>Niveau Trung Dang</p>
                <ul>
                    <li>1 c- b -a</li>
                    <li>2 c- b -a</li>
                    <li>3 c- b -a</li>
                </ul>
                <p>
                    Après quelques années l’élève professeur devient professeur attitré s’il travaille assidûment. Il doit alors connaître le programme professeur: six Thaos, quatre séries, les armes de base : Lance, bâton long, bâton court, épée, sabre, guisarme, tous les mouvements de pieds et de poings et leurs applications, le programme d’acrobaties, de santé et de Võ Tu Ve (self défense) et pratiquer le combat. Il donne des cours, participe à l’organisation et au développement de son club, participe aux activités de l’école, démonstrations, stages, etc.…
                </p>
                <h3>La Commission Technique Nationale :</h3>
                <p>
                    Si un professeur ayant passé par toutes les étapes précitées et pratiquant depuis dix ans (ordre d’idée) le Võ, désire s’engager plus profondément dans l’école, il peut postuler pour devenir membre de la Commission Technique Nationale de son pays.

                    La C.T.N regroupe les professeurs responsables de l’organisation de l’école au niveau national. Ils sont responsables de sections, de postes administratifs dans leur fédération. Les membres de la C.T.N ont pour devoir de perpétuer l’enseignement et le développement de l’école Sơn Long Quyền Thuật tel qu’il a été défini par le Maître Moc.

                    A ce stade, le Võ et la vie quotidienne sont confondus… Les membres de la C.T.N pratiquent tous les jours, encadrent les stages, effectuent les contrôles techniques, participent à toutes les activités de leur fédération ou association. Leur programme technique regroupe tous les Thaos, séries, supérieurs, aux armes comme à mains nues ; ils étudient également seuls, recherchent à comprendre et à maîtriser leur art. Ils sont les garants de l’école au niveau de leur pays. Les membres de la Commission Technique Nationale sont nommés par les responsables de la Commission Technique Internationale de leur pays.
                </p>
                <h3>La Commission Technique Internationale :</h3>
                <p>
                    Niveau thuong dang (niveau supérieur ) La Commission Technique Internationale est formée par les plus anciens membres des Commissions Techniques Nationales, divisée en deux groupes, la Commission Technique active regroupe les pratiquants les plus jeunes qui sont particulièrement impliqués au niveau pratique, encadrement des stages, démonstrations, etc.… et la Commission Technique conseil dont les membres plus âgés s’occupent davantage des postes d’administration, de gestion et de relations internationales.
 

                    Les membres de la C.T.I possèdent un diplôme supérieur définitif, leur programme technique est illimité, ils se rendent au Việt-Nam pour s’imprégner de sa culture et échanger avec les nombreux maîtres et écoles du pays. Ils sont liés par un contrat moral et écrit et prennent toutes les décisions d’une façon collective et constructive, ils sont l’organe décisionnel de la Fédération Internationale de Võ Việtnam. Ils ont les responsabilités techniques et éthiques de l’école Sơn Long Quyền Thuật après le Maître Moc. La CTI effectue des recherches sur l’ histoire et l’origine du võ. La première C.T.I a été nommée officiellement par le Maître Moc en 2001, lors du stage d’été à Bordeaux, étant âgé, il a désigné ce groupe pour lui succéder. L’admission d’un nouveau membre doit faire l’unanimité de la C.T.I.
                </p>
                <p>
                    Ceci est l’organisation « hiérarchique » de l’école Sơn Long Quyền Thuật. Il est impossible de donner le nombre d’années exact nécessaire à tel ou tel grade, il faut tenir compte de nombreux critères, le bon sens est plus important que l’application de règles strictes et le Võ est l’art de la souplesse et de l’adaptation. Le Maître Moc est à l’origine de cette école, l’organisation, le nom, le « logo », la technique, les couleurs de costumes etc. sont le fruit d’une longue réflexion et de l’étude de toute sa vie. Il nous enseignait inlassablement, répétant sans cesse les mêmes consignes, malgré son âge avancé, il participait à tous nos stages, parlait à nos élèves, nous conseillait et nous enseignait constamment sur ce qu’est le Võ.

                    Un pratiquant estimant sa formation terminée peut quitter l’école. Celui qui sort de l’école s’il désire poursuivre l’enseignement doit créer sa propre école. Il devient le maître de son école et doit trouver un nom, un programme technique, une identité d’école correspondant à sa propre recherche. S’il peut faire référence au Maître et à l’école qui l’a formé, il ne doit pas s’approprier un nom et une technique dont il n’est pas le fondateur, cela revient à souiller ses propres racines et ce comportement n’est pas digne d’un Võ-sinh. Le nom Võ Việtnam, Sơn Long Quyền Thuật ainsi que le logo du dragon et des trois montagnes sont déposés et protégés internationalement.
                </p>
            </div>
        </div>
    );
};

export default Ecole;