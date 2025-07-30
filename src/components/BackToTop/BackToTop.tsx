"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

// Components and styles
import styles from "./styles.module.scss";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 500);
  };

  const backToTop = () => {
    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      navigator.maxTouchPoints > 0;

    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const scrollStep = -window.scrollY / 15;
      const scrollAnimation = () => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(scrollAnimation);
        }
      };
      requestAnimationFrame(scrollAnimation);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={backToTop}
        className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
        aria-label="Back to top button"
      >
        <IoIosArrowUp className={styles.arrow} />
      </button>
    )
  );
};

export default BackToTop;
