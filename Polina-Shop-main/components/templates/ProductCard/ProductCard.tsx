'use client'
import styles from '@/styles/Product/index.module.scss'
import React, { useState } from 'react';

const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState('img/page.jpg'); // Стартовое изображение (основное)
  const [selectedSize, setSelectedSize] = useState('XS'); // Добавлено состояние выбранного размера

  const handleImageClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };

  const handleSizeClick = (size: React.SetStateAction<string>) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.thumbnailContainer}>
          <img src="img/page2.jpg" alt="Thumbnail 1" className={styles.thumbnail} onClick={() => handleImageClick("img/page2.jpg")} />
          <img src="img/page3.jpg" alt="Thumbnail 2" className={styles.thumbnail} onClick={() => handleImageClick("img/page3.jpg")} />
          <img src="img/page4.jpg" alt="Thumbnail 3" className={styles.thumbnail} onClick={() => handleImageClick("img/page4.jpg")} />
          <img src="img/page.jpg" alt="Thumbnail 3" className={styles.thumbnail} onClick={() => handleImageClick("img/page.jpg")} />
          {/* Добавьте другие маленькие изображения по аналогии */}
        </div>
        <img src={selectedImage} alt="Main Image" className={styles.mainImage} onClick={() => handleImageClick(selectedImage)} />
      </div>
      <div className={styles.productInfo}>
        <h2>Vestido Gracia</h2>
        <p>Vestido dorado metálico con escote en V y detalle de cerradura</p>
        <p>Mangas largas acampanadas.</p>
        <p>S/ 69.00</p>
        <div className={styles.colorOptions}>
          <span className={`${styles.colorCircle} ${styles.dark}`}></span>
          
          <span className={`${styles.colorCircle} ${styles.goldBrown}`}></span>
        </div>
        <p>Talla: {selectedSize}</p> {/* Отображение выбранного размера */}
        <p>Guía de tallas</p>
        <button className={styles.addToCartBtn}>Agregar al carrito</button>
      </div>
      <div className={styles.sizeOptions}>
          <span className={`${styles.sizeCircle} ${selectedSize === 'S' ? styles.selected : ''}`} onClick={() => handleSizeClick('S')}>S</span>
          <span className={`${styles.sizeCircle} ${selectedSize === 'M' ? styles.selected : ''}`} onClick={() => handleSizeClick('M')}>M</span>
          {/* Добавьте другие размеры по аналогии */}
        </div>
    </div>
  );
};

export default ProductCard;