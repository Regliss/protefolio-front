import React, { useEffect, useState } from "react";
import wordpressService from "../../services/wordpress.service";
import style from "./index.module.scss";
import Titlepage from "../../components/titlePage/TitlePage";
const Index = () => {
    const [about, setAbout] = useState({});

    useEffect(() => {
        wordpressService
            .getAbout()
            .then((data) => {
                setAbout(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    
    return (
        <div>
            <div className={style.form__about}>
                <Titlepage title="Informations personnel" />
                <div className={style.line}><span className={style.label}>Nom :</span> <span className={style.content}>{about.acf?.nom}</span></div>
                <div className={style.line}><span className={style.label}>Prénom :</span> <span className={style.content}>{about.acf?.prenom}</span></div>
                <div className={style.line}><span className={style.label}>Age : </span><span className={style.content}>{about.acf?.age}</span></div>
                <div className={style.line}><span className={style.label}>Email : </span><span className={style.content}>{about.acf?.email}</span></div>
                <div className={style.line}><span className={style.label}>Adresse : </span><span className={style.content}>{about.acf?.adresse}</span></div>
                <div className={style.line}><span className={style.label}>Code postale : </span><span className={style.content}>{about.acf?.code_postale}</span></div>
                <div className={style.line}><span className={style.label}>Localisation :</span></div>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.499641823513!2d2.565387315501135!3d48.65768652277159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e2512160f77f%3A0x43f0d817881ce526!2s5%20Rue%20des%20Carneaux%2C%2077380%20Combs-la-Ville!5e0!3m2!1sfr!2sfr!4v1679653787932!5m2!1sfr!2sfr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
        </div>
    );

};

export default Index;