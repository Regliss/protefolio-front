import React, { useEffect, useState } from "react";
import Titlepage from "../../components/titlePage/TitlePage";
import githubService from "../../services/github.service";
import style from "./index.module.scss";
import { useRouter } from 'next/router'

const Index = () => {
    const [repo, setRepo] = useState([]);
    const [content, setContent] = useState([]);

    const router = useRouter()
    console.log(router.query.keyword);
    const repoName = router.query.keyword;

    useEffect(() => {
        githubService
            .getReadme(repoName)
            .then((data) => {
                setRepo(data);
                setContent(repo.content);
                // const decodedData = atob(repo.content);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.form}>
            <div className={style.title}>
                <Titlepage title={repoName} />
            </div>
            <div className={style.content}>
                {repo.content}

            </div>
        </div>
    );
};

export default Index;