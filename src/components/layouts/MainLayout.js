import React from 'react';
import HeaderMenu from '../header/HeaderMenu';
import styles from "./MainLayout.module.scss";
import { useRouter } from "next/router";


const MainLayout = ({children}) => {
    const router = useRouter();
    return (
        <>
            <header className={styles.header_main}>
                <HeaderMenu />
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}

export default MainLayout;