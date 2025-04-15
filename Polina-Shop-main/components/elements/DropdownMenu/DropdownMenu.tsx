import React from 'react';
import Link from 'next/link';
import styles from '@/Styles/drop_down_menu/DropdownMenu.module.scss'; // Рекомендуется использовать CSS-модуль

const DropdownMenu = () => {
    return (
        <div className={styles.dropDownProfile}>
            <ul className={styles.burger}>
                <li className={styles.menuItem}>
                    <Link href='/card' className={styles.menuLink}>Canasta</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/favorites' className={styles.menuLink}>Favoritos</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/novedades' className={styles.menuLink}>Novedades</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/catalogo' className={styles.menuLink}>Catálogo</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/descuentos' className={styles.menuLink}>Descuentos</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;