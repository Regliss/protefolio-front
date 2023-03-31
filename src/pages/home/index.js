import React, { useEffect, useState } from "react";
// import TitlePage from "../../../components/UI/Title/TitlePage";
import wordpressService from "../../services/wordpress.service";
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
        <div>
             
        </div>
    );
};

export default Index;