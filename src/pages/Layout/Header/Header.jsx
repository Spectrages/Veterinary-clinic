import React from 'react';
import {ReactComponent as ALogo} from './images/logo.svg'
import {ReactComponent as PlaceLogo} from './images/Facebook Places.svg'
import styles from './Header.module.scss'

const titles = [
    "ЛИЧНЫЙ КАБИНЕТ",
    "О НАС",
    "НОВОСТИ И АКЦИИ",
    "КОНТАКТЫ",
    "БЛОГ",
]

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title_block}>
            <ALogo/>
            {titles.map((item) => {
                return(
                   <span className={styles.title_text}>
                       {item}
                   </span>
                )
            })}
            <div className={styles.city_block}>
                <PlaceLogo/>
                <span>Минск</span>
            </div>
            </div>
        </div>
    );
};

export {Header};