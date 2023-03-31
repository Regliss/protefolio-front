import React from 'react';
import ProjetCard from '../projetCard/ProjetCard';
import styles from './ProjetGrid.module.scss';

const ProjetGrid = (props) => {
    return (
        <div className={styles.repo__grid}>
            {
                props.repos.map((repo) => (
                    <ProjetCard repo={repo} key={repo.id}></ProjetCard>
                    
                ) )
            }
        </div>
    );
}

export default ProjetGrid;