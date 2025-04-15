import React from 'react';
import Image from 'next/image';
import styles from "@/Styles/favorites/index.module.scss";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price, onClick }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>S/.{price.toFixed(2)}</p>
        <button className={styles.addToCartButton}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
