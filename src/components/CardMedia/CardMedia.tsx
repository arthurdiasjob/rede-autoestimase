"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import "material-symbols";

type CardMediaProps = {
  title: string;
  summary: string;
  text: string;
};

const CardMedia: React.FC<CardMediaProps> = ({ title, summary, text }) => {
  const [isTextVisible, setisTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setisTextVisible((prev) => !prev);
  };

  return (
    <div className={styles.CardMediaWrapper}>
      <div className={styles.textWrapper}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.summary}>{summary}</p>
        <p
          className={`${styles.text} ${
            isTextVisible ? styles.textVisible : ""
          }`}
        >
          {text}
        </p>
      </div>
      <span
        className={`material-symbols-outlined ${
          isTextVisible ? styles.rotated : ""
        }`}
        onClick={toggleTextVisibility}
      >
        expand_circle_down
      </span>
    </div>
  );
};

export default CardMedia;
