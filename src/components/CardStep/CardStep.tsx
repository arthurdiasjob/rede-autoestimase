import styles from "./styles.module.scss";
import React, { ReactNode } from "react";

type CardStepProps = {
  number: number | string;
  title: string;
  text: ReactNode;
};

const CardStep: React.FC<CardStepProps> = ({ number, title, text }) => {
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.number}>{number}</h3>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default CardStep;
