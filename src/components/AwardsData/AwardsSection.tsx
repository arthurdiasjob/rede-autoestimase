"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { awardsData } from "./Awardsdata";

function AwardsSection() {
  return (
    <section className={styles.AwardsSection}>
      <p className={styles.subtitle}>CHANCELAS</p>
      <h2 className={styles.title}>Prêmios e certificados</h2>
      <p className={styles.description}>
        Certificações e reconhecimentos da nossa atuação
      </p>
      <div className={styles.awardsGrid}>
        {awardsData.map((award, index) => (
          <div key={index} className={styles.awardItem}>
            <Image
              src={award.image}
              alt={award.title}
              width={200}
              height={150}
              style={{ objectFit: "contain" }}
              quality={100}
              unoptimized={true}
            />
            <span className={styles.year}>{award.year}</span>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwardsSection;
