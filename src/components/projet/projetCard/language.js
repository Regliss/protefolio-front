import { useEffect, useState } from "react";
import githubService from "../../../services/github.service";
import styles from "./Language.module.scss";
const Language = ({repoName})=>{
    const [language, setLanguage] = useState({});

    useEffect(() => {
        githubService
            .getLanguage(repoName)
            .then((data) => {
                // setLanguage([...language,data]);
                setLanguage(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(language);

return (<div className={styles.language}>
    {
        Object.keys(language).map(langue => 
            <div className={styles.langue}>
                {langue}
            </div>
        )
    }
    </div>)
}

export default Language;