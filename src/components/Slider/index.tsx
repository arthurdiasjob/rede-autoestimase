"use client";

import React, { useState, useEffect } from "react";
import "./style.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "Organização Nacional com a missão de fortalecer a saúde mental de jovens e mulheres.",
      image: "/assets/images/banner1.jpg", 
      button: { label: "Clique e saiba mais", link: "#" },
      className: "slider__text--limit",
    },
    {
      text: "Conheça a nossa Carta Aberta pela Saúde Mental",
      image: "/assets/images/banner2.jpg",
      button: { label: "Clique e saiba mais", link: "#" },
      className: "slider__text--limit",
    },
    {
      text: "Você é jovem ativista? Preencha a nossa pesquisa de saúde mental!",
      image: "/assets/images/banner3.jpg",
      button: { label: "Acesse a pesquisa", link: "#" },
      className: "slider__text--limit",
    },
    {
      text: "Abrace a causa",
      image: "/assets/images/banner4.png",
      button: { label: "Acesse a pesquisa", link: "#" },
      className: "Slider___text--button_1"
    },
    {
      text: "A cada 10 pessoas acolhidas, 8 são mulheres e 6 vivem em vulnerabilidade social.",
      image: "/assets/images/banner5.png",
      button: { label: "Acesse a pesquisa", link: "#" },
      className: "Slider___text--button_2"
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (totalSlides > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 9000);
      return () => clearInterval(interval);
    }
  }, [totalSlides]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="slider">
      <div
        className="slider__content"
        style={{
          backgroundImage: slides[currentSlide]?.image ? `url(${slides[currentSlide].image})` : "none",
        }}
      >
       <div className={`slider__text ${slides[currentSlide].className || ""}`}>
      <p>{slides[currentSlide].text}</p>
      {slides[currentSlide].button && (
        <a className="slider__button" href={slides[currentSlide].button.link}>
        {slides[currentSlide].button.label}
    </a>
  )}
</div>

      </div>

      <div className="slider__arrow slider__arrow--left" onClick={prevSlide}>
        ❮
      </div>
      <div className="slider__arrow slider__arrow--right" onClick={nextSlide}>
        ❯
      </div>

      <div className="slider__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`slider__dot ${index === currentSlide ? "slider__dot--active" : ""}`}
            onClick={() => goToSlide(index)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
