import React from 'react';
import Logo from '@/components/elements/Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top__container">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__socials">
          <div className="footer__socials__title">Nuestras redes</div>
            <ul className="list-reset footer__socials__list">
              <li className="footer__socials__item">
                <a
                  href="https://www.instagram.com/polina__store?igsh=emRkMWJ2aDR4MTA4"
                  className="footer__socials__item__link"
                >
                  <div className="footer__socials__item__link__icon" />
                </a>
              </li>
              <li className="footer__socials__item">
                <a
                  href="https://www.tiktok.com/"
                  className="footer__socials__item__link"
                >
                  <div className="footer__socials__item__link__icon" />
                </a>
              </li>
              <li className="footer__socials__item">
                <a
                  href="https://www.facebook.com/share/jK659SCv5LneWj4e/?mibextid=LQQJ4d"
                  className="footer__socials__item__link"
                >
                  <div className="footer__socials__item__link__icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__image">
            <img src="/img/book.png" alt="Book" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
