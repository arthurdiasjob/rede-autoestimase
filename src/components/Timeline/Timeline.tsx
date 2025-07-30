"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const timelineData = [
  {
    timelineYear: "2020",
    title: "O começo de tudo",
    description:
      "Início dos trabalhos online e primeiro grupo de voluntários(as).",
    image: "/assets/images/sobrenos/img2020.png",
  },
  {
    timelineYear: "2021",
    title: "Fundação da associação Rede Autoestima-se",
    description:
      "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka.",
    image: "/assets/images/sobrenos/img2021.png",
  },
  {
    timelineYear: "2022",
    title: "Lançamento do primeiro projeto para jovens indígenas brasileiras",
    description:
      "A conquista da primeira receita financeira de fortalecimento institucional.",
    image: "/assets/images/sobrenos/img2023.png",
  },
  {
    timelineYear: "2023",
    title: "Lançamento do projeto Rede Autoestima-se na Amazônia",
    description:
      "Publicação da cartilha e primeiro estudo sobre a saúde mental dos (as) jovens ativistas no Brasil.",
    image: "/assets/images/sobrenos/img2024.png",
  },
  {
    timelineYear: "2024",
    title: "Prêmio 2024",
    description:
      "Rede Autoestima-se recebe o Prêmio Empreendedor Social da Folha de São Paulo.",
    image: "/assets/images/sobrenos/img2025.png",
  },
];

export default function Timeline() {
  const [timelineOrder, setTimelineOrder] = useState<"asc" | "desc">("asc");

  const orderedTimelineData =
    timelineOrder === "asc"
      ? [...timelineData].sort(
          (a, b) => Number(a.timelineYear) - Number(b.timelineYear)
        )
      : [...timelineData].sort(
          (a, b) => Number(b.timelineYear) - Number(a.timelineYear)
        );

  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineHeader}>
        <h6>LINHA DO TEMPO</h6>
        <h2>Navegue por nossa evolução ao longo dos anos</h2>
        <p>e conheça os momentos marcantes</p>
        <div className={styles.timelineOrder}>
          <button
            className={`${styles.orderButton} ${
              timelineOrder === "asc" ? styles.active : ""
            }`}
            onClick={() => setTimelineOrder("asc")}
          >
            Mais antigos
          </button>
          <button
            className={`${styles.orderButton} ${
              timelineOrder === "desc" ? styles.active : ""
            }`}
            onClick={() => setTimelineOrder("desc")}
          >
            Mais recentes
          </button>
        </div>
      </div>

      <div className={styles.timeline}>
        {orderedTimelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={styles.timelineItem}>
              {/* Coluna da esquerda: texto ou imagem */}
              {isEven ? (
                <div className={styles.timelineText}>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className={styles.timelineImageWrapper}>
                  <Image
                    src={item.image}
                    alt={`${item.timelineYear} - ${item.title}`}
                    width={470}
                    height={350}
                    className={styles.timelineImage}
                  />
                </div>
              )}

              {/* Coluna central: linha + ano */}
              <div className={styles.timelineCenter}>
                <span className={styles.timelineYear}>{item.timelineYear}</span>
                <span className={styles.timelineLine}></span>
              </div>

              {/* Coluna da direita: imagem ou texto */}
              {isEven ? (
                <div className={styles.timelineImageWrapper}>
                  <Image
                    src={item.image}
                    alt={`${item.timelineYear} - ${item.title}`}
                    width={470}
                    height={350}
                    className={styles.timelineImage}
                  />
                </div>
              ) : (
                <div className={styles.timelineText}>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.timelineEnd}>
        <h1>2025</h1>
      </div>
    </section>
  );
}
