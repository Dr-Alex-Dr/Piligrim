import React from 'react'
import Menu from '../../componets/Menu/Menu';
import styles from './Map.module.css'


const Map = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Карта партнеров</p>
            {<iframe className={styles.map} src="https://oemedia.ru/map/sbrf/" ></iframe>}
            <Menu />
        </div>
    )
}

export default Map