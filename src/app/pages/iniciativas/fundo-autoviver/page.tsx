import Image from "next/image";
import SplitView from "@/components/SplitView/SplitView";
import Banner from "@/components/Banner/Banner";
import React from "react";

import styles from "./styles.module.scss";

import fundoAutoViver from "../../../../../public/assets/images/fundo-autoviver.png";
import bannerComoFunciona from "../../../../../public/assets/images/Como-funciona.jpg";
import bannerGrandepasso from "../../../../../public/assets/images/um-grande-passo.jpg";
import bannerSustentabilidade from "../../../../../public/assets/images/Sustentabilidade.jpg";
import bannerEmpoderar from "../../../../../public/assets/images/Empoderar.jpg";
import bannerEducar from "../../../../../public/assets/images/Educar.jpg";

const bannerData = [
  {
    title: "Fundo AutoViver",
    image: fundoAutoViver,
  },
];

const sectionData = [
  {
    title: "",
    text: "O Fundo AutoViver é uma iniciativa inovadora da Rede Autoestima-se, criada para promover o bem-estar financeiro e emocional de jovens e mulheres. Compreendemos que a saúde financeira está intrinsecamente ligada à autoestima e à qualidade de vida, e, por isso, nosso fundo oferece suporte financeiro direcionado  em gestão de finanças pessoais e recursos para o desenvolvimento de habilidades que fortalecem a autonomia.",
  },
  {
    title: "Objetivos do Fundo",
  },
];

const cardContent = [
  {
    title: "Empoderar",
    description:
      "Fornecer recursos que auxiliem na superação de desafios financeiros, permitindo que nossos beneficiários se concentrem em seu crescimento pessoal e emocional.",
    image: bannerEmpoderar,
    alt: "",
    reverse: false,
  },
  {
    title: "Educar",
    description:
      "Oferecer orientações sobre gestão financeira e planejamento, ajudando a construir uma relação saudável com o dinheiro.",
    image: bannerEducar,
    alt: "",
    reverse: false,
  },
  {
    title: "Sustentabilidade",
    description:
      "Incentivar práticas sustentáveis, como a adoção de energia limpa, promovendo não apenas a saúde financeira, mas também a responsabilidade ambiental.",
    image: bannerSustentabilidade,
    alt: "",
    reverse: false,
  },
];

const splitViewData = [
  {
    title: "Como funciona",
    text: "Os recursos do Fundo AutoViver são destinados a apoiar aqueles que enfrentam dificuldades financeiras, proporcionando acesso a atendimentos psicológicos, materiais educativos e oportunidades de desenvolvimento pessoal. Além disso, promovemos workshops e rodas de conversa sobre finanças e autoestima, fortalecendo a comunidade e incentivando o compartilhamento de experiências.",
    image: bannerComoFunciona,
    alt: "",
    reverse: false,
  },
  {
    title: "Um grande passo...",
    text: "Ao investir no Fundo AutoViver, você se junta a nós na construção de um futuro mais inclusivo, sustentável e financeiramente seguro, onde cada indivíduo pode se valorizar e alcançar seu pleno potencial.",
    image: bannerGrandepasso,
    alt: "",
    reverse: true,
  },
];

export default function AutoViver() {
  return (
    <div className={styles.pageContainer}>
      <Banner
        title={bannerData[0].title}
        image={bannerData[0].image}
        className={styles.banner}
      />

      <div className={styles.contentContainer}>
        <div className={styles.textBox}>
          <p>{sectionData[0].text}</p>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.sectionTitle}>{sectionData[1].title}</h2>
        <div className={styles.cardsContainer}>
          {cardContent.map((card, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={card.image}
                alt={card.alt}
                className={styles.cardImage}
              />
              <div className={styles.cardWarrper}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.splitViewContainer}>
        <div className={styles.splitViewWrapper}>
          {splitViewData.map((splitView, index) => (
            <SplitView
              key={index}
              title={splitView.title}
              text={splitView.text}
              image={splitView.image}
              alt={splitView.alt}
              reverse={splitView.reverse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
