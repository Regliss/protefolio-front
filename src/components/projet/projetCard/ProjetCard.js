import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjetCard.module.scss";
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconEye } from '@tabler/icons-react';
import { IconEyeFilled } from '@tabler/icons-react';
import Language from "./language";


const ProjetCard = (props) => {

    console.log(props.repo);
  return (
    <div className={styles.repo__card}>
        {/* <div className={styles.icon}>
            <Link target="_blank" href={`${props.repo?.svn_url}`}>
                <IconBrandGithubFilled />
            </Link>
        </div> */}
          <h2>
            <div className={styles.divIcon}>
              <div>
                {props.repo?.name} :
              </div>
              <div className={styles.icon2}>

                {/* {{ pathname: '/detail', query: { keyword: `${props.repo?.name}` } }} */}
                <Link href={{ pathname: '/detail', query: { keyword: `${props.repo?.name}` } }}>
                  <IconEyeFilled />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link target="_blank" href={`${props.repo?.svn_url}`}>
                    <IconBrandGithubFilled />
                </Link>
            </div>
            </div>
          </h2>
          <h6>Date création :{props.repo?.created_at}</h6>
          <h6>Language : {props.repo?.language}</h6>
          <div className={styles.language}>
            <h6>Langages : </h6><Language repoName={props.repo?.name}/>
          </div>
          <h6>Visibilité : {props.repo?.visibility}</h6>
      <div className={styles.btn__group}>
      </div>
    </div>
  );
};

export default ProjetCard;