import React, { useState } from 'react'
import facebook from '../facebook.svg'
import instagram from '../instagram.svg'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

function Footer() {

    const contactTemplate = 
    {
        nom: '',
        prenom:'', 
        email: '',
        message: ''
    }

    const [contact, setContact] = useState(contactTemplate)
    const [showInfo, setShowInfo] = useState(false)

    const handleInfo= () => 
    {
        setShowInfo(!showInfo)
    }


    console.log(contact.nom)
    
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setContact({...contact, [name]:value})
    }

    init("user_jIe3wORMz41ToPMW7u3Zy");


    const envoi = (e) =>
    {
        e.preventDefault();
        if( (contact.nom || contact.prenom || contact.email || contact.message) == '')
        {
            alert('Veuillez remplir tous les champs')
        }
        else
        {
            e.preventDefault();
            emailjs.send('default_service', 'template_litngjt', {contact})
            .then((result) => {
                console.log(result.text);
                alert('email envoyé')
            }, (error) => {
                console.log(error.text);
            });
        }
    }


    return (
        <div class="footer">
            <div className="contactEmail">
                <div class="info">
                    <h5> Adresse: </h5>
                    Auberge des jeunes Azazga
                    <h5> Telephone: </h5>
                    0123456789
                    <h5> Email: </h5>
                    test@gmail.com
                </div>
                <div class="form">
                    <h2>Contact</h2>
                    <input type="text" placeholder="Nom" name="nom" value={contact.nom} onChange={onChangeInput}></input>
                    <input type="text" placeholder="Prenom" name="prenom" value={contact.prenom} onChange={onChangeInput}></input>
                    <input type="email" placeholder="Email" name="email" value={contact.email} onChange={onChangeInput}></input>
                    <textarea type="text" placeholder="Message" name="message" value={contact.message} onChange={onChangeInput}></textarea>
                    <button onClick={envoi}>Envoyer</button>
                </div>
            </div>
            <div className="logos">
                <div className="logo">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className="by" onClick={() =>handleInfo()}>
                    <p className="ZM">Zahir MENDACI ©</p>
                    {
                        showInfo && (
                                <div className="showInfos">
                                    <div className="infosContent">
                                        <h3>Zahir MENDACI</h3>
                                        <a href="https://www.linkedin.com/in/zahir-mendaci/" target="_blank">LinkedIn</a><br />
                                        <a href="https://github.com/Zahir-MENDACI/" target="_blank">Github</a>
                                        <div className="button return" onClick={handleInfo}>
                                            Retourner sur la page
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default Footer;
