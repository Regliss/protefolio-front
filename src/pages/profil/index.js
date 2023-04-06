import React, { useEffect, useState } from "react";
import Titlepage from "../../components/titlePage/TitlePage";
import wordpressService from "../../services/wordpress.service";
import style from "./index.module.scss";
import { IconFileDownload } from '@tabler/icons-react';
const Index = () => {
    const [profil, setProfil] = useState({});

    useEffect(() => {
        wordpressService
            .getAbout()
            .then((data) => {
                setProfil(data);
                // console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.form}>
            <div className={style.title}>
                <Titlepage title="Mon CV" />
                <a href="./CVThomasPOMART.pdf" download><IconFileDownload/></a>

            </div>
            <div className={style.img}>
                <img
                    src="http://localhost/wp-content/uploads/2023/03/Capture-decran-2023-03-24-a-16.01.09.png"
                    alt="Mon CV" />
            </div>
        </div>
    );
};

export default Index;