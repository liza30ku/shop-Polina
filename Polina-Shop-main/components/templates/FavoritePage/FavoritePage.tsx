'use client'
import React from 'react';
import styles from '@/Styles/favorites/index.module.scss';
import ProductCard from "@/components/modules/FavoritePage/ProductCard"

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

const FavoritesSection: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      image: '/img/Conjunto Alma.JPEG',
      title: 'Conjunto Alma',
      price: 165,
    },
    {
      id: '2',
      image: '/img/Blusa Luz.jpeg',
      title: 'Blusa Luz',
      price: 79.90,
    },
    {
      id: '3',
      image: '/img/Conjunto Passion.jpeg',
      title: 'Conjunto Passion',
      price: 140,
    },
  ];

  return (
    <section className={styles['category-section']}>
      <h2 className={styles['category-title']}>Favoritos</h2>
      <div className={styles['category-row']}>
        {products.map((product) => (
          <div key={product.id} className={styles['category-item']}>
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onClick={() => console.log(`Clicked on S/.${product.title}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesSection;
