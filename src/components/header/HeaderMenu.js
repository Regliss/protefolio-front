import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import React, { useState, useEffect } from "react";
import wordpressService from "../../services/wordpress.service";

const HeaderMenu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState({});

    useEffect(() => {
        wordpressService
            .getMenu()
            .then((data) => {
                setMenu(data);
                // console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

  return (
    <div className={styles.header_menu}>
      <nav>
        <ul>
          <li className={router.pathname == "/home" ? styles.active : ""}>
            <Link href="/home">
             <h1>{menu[0]?.title}</h1>
            </Link>
          </li>
          <li className={router.pathname == "/profil" ? styles.active : ""}>
            <Link href="/profil">
             <h1>{menu[1]?.title}</h1>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? styles.active : ""}>
            <Link href="/about">
             <h1>{menu[2]?.title}</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;