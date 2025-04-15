import React from 'react';
import Image from 'next/image';
import vestidos from '@/public/img/categories-img/vestidos.png';
import blusas from '@/public/img/categories-img/blusas.png';
import conjuntos from '@/public/img/categories-img/conjuntos.png';
import otros from '@/public/img/categories-img/otros.png';
import styles from '@/styles/main-page/index.module.scss';

const CategorySection: React.FC = () => {
  return (
    <section className={styles['category-section']}>
      <h2 className={styles['category-title']}>Categorías</h2>
      <div className={styles['category-row']}>
        <div className={styles['category-item']}>
          <Image src={vestidos.src} alt="Vestidos" className={styles['category-image']} layout="fill" objectFit="cover" />
          <a href="/vestidos" className={styles['category-name']}>Vestidos</a>
        </div>
        <div className={styles['category-item']}>
          <Image src={blusas.src} alt="Blusas" className={styles['category-image']} layout="fill" objectFit="cover" />
          <a href="/blusas" className={styles['category-name']}>Blusas</a>
        </div>
        <div className={styles['category-item']}>
          <Image src={conjuntos.src} alt="Conjuntos" className={styles['category-image']} layout="fill" objectFit="cover" />
          <a href="/conjuntos" className={styles['category-name']}>Conjuntos</a>
        </div>
        <div className={styles['category-item']}>
          <Image src={otros.src} alt="Otros" className={styles['category-image']} layout="fill" objectFit="cover" />
          <a href="/otros" className={styles['category-name']}>Otros</a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;







