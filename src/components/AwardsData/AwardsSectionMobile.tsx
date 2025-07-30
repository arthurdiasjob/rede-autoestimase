"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { awardsData } from "./Awardsdata";

export default function AwardsSectionMobile() {
  return (
    <section className={styles.AwardsSectionMobile}>
      <p className={styles.subtitle}>CHANCELAS</p>
      <h2 className={styles.title}>Prêmios e certificados</h2>
      <p className={styles.description}>
        Certificações e reconhecimentos da nossa atuação
      </p>

      <div className={styles.awardsList}>
        {awardsData.map((award, index) => (
          <div key={index} className={styles.awardCard}>
            <Image
              src={award.image}
              alt={award.title}
              width={300}
              height={180}
              style={{ objectFit: "contain" }}
              quality={100}
              unoptimized
            />
            <span className={styles.year}>{award.year}</span>
            <p className={styles.description}>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
