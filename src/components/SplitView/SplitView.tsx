"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState, useEffect } from "react";
import "material-symbols";

type SplitViewProps = {
  icon?: string;
  title: string;
  text: string;
  image: StaticImport | string;
  alt: string;
  reverse?: true | false;
};

const SplitView: React.FC<SplitViewProps> = ({
  icon,
  title,
  text,
  reverse,
  image,
  alt,
}) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsTablet(mediaQuery.matches);

    const listener = () => setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div
      className={`${styles.grid} ${reverse ? styles.reverse : ""} ${
        isTablet ? styles.mobile : ""
      }`}
    >
      {isTablet ? (
        <>
          <div className={styles.title}>
            <span className="material-symbols-outlined">{icon}</span>
            <h3>{title}</h3>
          </div>
          <div className={styles.image}></div>
          <Image src={image} alt={alt} className={styles.image} />
          <p className={styles.paragraph}>{text}</p>
        </>
      ) : (
        <>
          <Image src={image} alt={alt} className={styles.image} />
          <div className={styles.textBox}>
            <div className={styles.title}>
              <span className="material-symbols-outlined">{icon}</span>
              <h3>{title}</h3>
            </div>

            <p className={styles.paragraph}>{text}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SplitView;
