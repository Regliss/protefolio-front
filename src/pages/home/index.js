import React, { useEffect, useState } from "react";
import Titlepage from "../../components/titlePage/TitlePage";
import wordpressService from "../../services/wordpress.service";
import style from "./index.module.scss";
const Index = () => {
    const [home, setHome] = useState({});

    useEffect(() => {
        wordpressService
            .getAbout()
            .then((data) => {
                setHome(data);
                // console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.form}>
             <div className={style.title}>
                <Titlepage title="Thomas Pomart" />
                {/* <Titlepage title="Développeur Full stack PHP Symfony" /> */}
            </div>
            <div className={style.img}>
                <img
                    src="http://localhost/wp-content/uploads/2023/03/dev-1170x600-1.webp"
                    alt="Accueil" />
            </div>
        </div>
    );
};

export default Index;