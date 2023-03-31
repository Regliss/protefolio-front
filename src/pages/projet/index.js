import React, { useEffect, useState } from "react";
import Titlepage from "../../components/titlePage/TitlePage";
import githubService from "../../services/github.service";
import style from "./index.module.scss";
import ProjetGrid from "../../components/projet/projectGrid/ProjetGrid";
const Index = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        githubService
            .getRepos()
            .then((data) => {
                setRepos(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.form}>
            <div className={style.title}>
                <Titlepage title="Mes projets" />
            </div>
            <ProjetGrid repos={repos} />
        </div>
    );
};

export default Index;