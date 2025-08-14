"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useNews, NewsItem } from "../../hooks/useNews";

const MediaSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { news, loading, error } = useNews();

  // Dividir notícias: 3 primeiras para o carrossel
  const carouselNews = news.slice(0, 3);
  const sidebarNews = news.slice(3);

  const GradientSVG = () => (
    <svg
      width="569"
      height="604"
      viewBox="0 0 569 604"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="569" height="604" fill="url(#paint0_linear_44_3229)" />
      <defs>
        <linearGradient
          id="paint0_linear_44_3229"
          x1="454.74"
          y1="251.909"
          x2="20.1714"
          y2="627.348"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopColor="#3B413F" />
        </linearGradient>
      </defs>
    </svg>
  );

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselNews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselNews.length - 1 : prevIndex - 1
    );
  };

  const PrevArrowSVG = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.75C16.7861 3.75 13.6443 4.70305 10.972 6.48862C8.29969 8.27419 6.21689 10.8121 4.98696 13.7814C3.75704 16.7507 3.43524 20.018 4.06225 23.1702C4.68926 26.3224 6.23692 29.2179 8.50952 31.4905C10.7821 33.7631 13.6776 35.3107 16.8298 35.9378C19.982 36.5648 23.2493 36.243 26.2186 35.013C29.1879 33.7831 31.7258 31.7003 33.5114 29.028C35.297 26.3557 36.25 23.2139 36.25 20C36.2455 15.6916 34.5319 11.561 31.4855 8.51454C28.439 5.46806 24.3084 3.75455 20 3.75ZM20 33.75C17.2805 33.75 14.6221 32.9436 12.3609 31.4327C10.0997 29.9218 8.33737 27.7744 7.29666 25.2619C6.25596 22.7494 5.98366 19.9847 6.51421 17.3175C7.04476 14.6503 8.35432 12.2003 10.2773 10.2773C12.2003 8.35431 14.6503 7.04475 17.3175 6.5142C19.9848 5.98366 22.7494 6.25595 25.2619 7.29666C27.7744 8.33736 29.9218 10.0997 31.4327 12.3609C32.9436 14.6221 33.75 17.2805 33.75 20C33.7459 23.6455 32.2959 27.1404 29.7182 29.7182C27.1404 32.2959 23.6455 33.7459 20 33.75ZM23.3844 14.6344L18.0172 20L23.3844 25.3656C23.5005 25.4818 23.5926 25.6196 23.6555 25.7714C23.7184 25.9231 23.7507 26.0858 23.7507 26.25C23.7507 26.4142 23.7184 26.5769 23.6555 26.7286C23.5926 26.8804 23.5005 27.0182 23.3844 27.1344C23.2682 27.2505 23.1304 27.3426 22.9786 27.4055C22.8269 27.4683 22.6643 27.5007 22.5 27.5007C22.3358 27.5007 22.1731 27.4683 22.0214 27.4055C21.8696 27.3426 21.7318 27.2505 21.6156 27.1344L15.3656 20.8844C15.2494 20.7683 15.1572 20.6304 15.0943 20.4787C15.0314 20.3269 14.999 20.1643 14.999 20C14.999 19.8357 15.0314 19.6731 15.0943 19.5213C15.1572 19.3696 15.2494 19.2317 15.3656 19.1156L21.6156 12.8656C21.7318 12.7495 21.8696 12.6574 22.0214 12.5945C22.1731 12.5317 22.3358 12.4993 22.5 12.4993C22.6643 12.4993 22.8269 12.5317 22.9786 12.5945C23.1304 12.6574 23.2682 12.7495 23.3844 12.8656C23.5005 12.9818 23.5926 13.1196 23.6555 13.2714C23.7184 13.4231 23.7507 13.5858 23.7507 13.75C23.7507 13.9142 23.7184 14.0769 23.6555 14.2286C23.5926 14.3804 23.5005 14.5182 23.3844 14.6344Z"
        fill="white"
      />
    </svg>
  );

  const NextArrowSVG = () => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0.75C13.7861 0.75 10.6443 1.70305 7.97199 3.48862C5.29969 5.27419 3.21689 7.81209 1.98696 10.7814C0.757041 13.7507 0.435237 17.018 1.06225 20.1702C1.68926 23.3224 3.23692 26.2179 5.50952 28.4905C7.78213 30.7631 10.6776 32.3107 13.8298 32.9378C16.982 33.5648 20.2493 33.243 23.2186 32.013C26.1879 30.7831 28.7258 28.7003 30.5114 26.028C32.297 23.3557 33.25 20.2139 33.25 17C33.2455 12.6916 31.5319 8.56102 28.4855 5.51454C25.439 2.46806 21.3084 0.75455 17 0.75ZM17 30.75C14.2805 30.75 11.6221 29.9436 9.36092 28.4327C7.09974 26.9218 5.33737 24.7744 4.29666 22.2619C3.25596 19.7494 2.98366 16.9847 3.51421 14.3175C4.04476 11.6503 5.35432 9.20025 7.27729 7.27728C9.20026 5.35431 11.6503 4.04475 14.3175 3.5142C16.9848 2.98366 19.7494 3.25595 22.2619 4.29666C24.7744 5.33736 26.9218 7.09973 28.4327 9.36091C29.9436 11.6221 30.75 14.2805 30.75 17C30.7459 20.6455 29.2959 24.1404 26.7182 26.7182C24.1404 29.2959 20.6455 30.7459 17 30.75ZM21.6344 16.1156C21.7506 16.2317 21.8428 16.3696 21.9057 16.5213C21.9686 16.6731 22.001 16.8357 22.001 17C22.001 17.1643 21.9686 17.3269 21.9057 17.4787C21.8428 17.6304 21.7506 17.7683 21.6344 17.8844L15.3844 24.1344C15.2682 24.2505 15.1304 24.3426 14.9786 24.4055C14.8269 24.4683 14.6643 24.5007 14.5 24.5007C14.3358 24.5007 14.1731 24.4683 14.0214 24.4055C13.8696 24.3426 13.7318 24.2505 13.6156 24.1344C13.4995 24.0182 13.4074 23.8804 13.3445 23.7286C13.2817 23.5769 13.2493 23.4142 13.2493 23.25C13.2493 23.0858 13.2817 22.9231 13.3445 22.7714C13.4074 22.6196 13.4995 22.4818 13.6156 22.3656L18.9828 17L13.6156 11.6344C13.3811 11.3998 13.2493 11.0817 13.2493 10.75C13.2493 10.4183 13.3811 10.1002 13.6156 9.86562C13.8502 9.63107 14.1683 9.4993 14.5 9.4993C14.8317 9.4993 15.1498 9.63107 15.3844 9.86562L21.6344 16.1156Z"
        fill="white"
      />
    </svg>
  );

  // Tratamento de loading e erro
  if (loading) {
    return (
      <section className={styles.mediaContainer}>
        <div className={styles.mediaContent}>
          <div className={styles.loadingMessage}>Carregando notícias...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.mediaContainer}>
        <div className={styles.mediaContent}>
          <div className={styles.errorMessage}>{error}</div>
        </div>
      </section>
    );
  }

  if (carouselNews.length === 0) {
    return (
      <section className={styles.mediaContainer}>
        <div className={styles.mediaContent}>
          <div className={styles.emptyMessage}>Nenhuma notícia encontrada.</div>
        </div>
      </section>
    );
  }

  const currentNews = carouselNews[currentImageIndex];

  return (
    <section className={styles.mediaContainer}>
      <div className={styles.mediaContent}>
        {/* Coluna do Carrossel */}
        <div className={styles.carouselColumn}>
          <div className={styles.imageContainer}>
            {currentNews?.imagem ? (
              <Image
                src={currentNews.imagem}
                alt={currentNews.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className={styles.carouselImage}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <div className={styles.svgContainer}>
                <GradientSVG />
              </div>
            )}
            <button className={styles.carouselButtonLeft} onClick={prevImage}>
              <PrevArrowSVG />
            </button>
            <button className={styles.carouselButtonRight} onClick={nextImage}>
              <NextArrowSVG />
            </button>
            <div className={styles.vehicleOverlay}>
              <h3 className={styles.vehicleName}>{currentNews.veiculoMidia}</h3>
              <p className={styles.imageTitle}>{currentNews.titulo}</p>
              <a
                href={currentNews.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.saibaMaisButton}
              >
                <Image
                  src="/assets/icons/saiba-mais-arrow.png"
                  alt="Seta"
                  width={16}
                  height={16}
                />
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>

        {/* Coluna das Matérias */}
        <div className={styles.newsColumn}>
          <div className={styles.newsList}>
            {sidebarNews.map((item: NewsItem) => (
              <div key={item._id} className={styles.newsItem}>
                <div className={styles.newsContent}>
                  <div className={styles.newsInfo}>
                    <div className={styles.newsHeader}>
                      <span className={styles.vehicleLabel}>
                        {item.veiculoMidia}
                      </span>
                    </div>
                    <h3 className={styles.newsTitle}>{item.titulo}</h3>
                  </div>
                  <div className={styles.newsIcon}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/icons/saiba-mais-arrow.png"
                        alt="Saiba mais"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
