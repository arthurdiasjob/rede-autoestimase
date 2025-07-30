import React from "react";
import Image from "next/image";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import CardService from "@/components/CardService";
import Forms from "@/components/Forms";
import instituicoesPic from "../../../../../public/assets/images/instituicoes-de-ensino.png";
import instituicoesSplit1 from "../../../../../public/assets/images/instituicoes-split1.png";
import instituicoesSplit2 from "../../../../../public/assets/images/instituicoes-split2.png";
import bookOpenText from "../../../../../public/assets/icons/BookOpenText.png";
import chats from "../../../../../public/assets/icons/Chats.png";
import chalkboardTeacher from "../../../../../public/assets/icons/ChalkboardTeacher.png";
import microphoneStage from "../../../../../public/assets/icons/MicrophoneStage.png";
import microscope from "../../../../../public/assets/icons/Microscope.png";
import smileySticker from "../../../../../public/assets/icons/SmileySticker.png";
import student from "../../../../../public/assets/icons/Student.png";
import rodas from "../../../../../public/assets/images/instituicoes-de-ensino/rodas-de-conversa.jpg";
import workshops from "../../../../../public/assets/images/instituicoes-de-ensino/workshops.jpg";
import documentarios from "../../../../../public/assets/images/instituicoes-de-ensino/documentarios.jpg";
import estudos from "../../../../../public/assets/images/instituicoes-de-ensino/estudos-cientificos.jpg";
import felicidade from "../../../../../public/assets/images/instituicoes-de-ensino/programa-felicidade.jpg";
import bolsas from "../../../../../public/assets/images/instituicoes-de-ensino/bolsas-de-estudo.jpg";
import receber from "../../../../../public/assets/images/instituicoes-de-ensino/receber.jpg";

const cardData = [
  {
    title: "Rodas de conversas",
    icon: chats,
    backgroundImage: rodas,
  },
  {
    title: "Workshops",
    icon: chalkboardTeacher,
    backgroundImage: workshops,
  },
  {
    title: "Participação em documentários e entrevistas",
    icon: microphoneStage,
    backgroundImage: documentarios,
  },
  {
    title: "Participação em estudos científicos",
    icon: microscope,
    backgroundImage: estudos,
  },
  {
    title: "Programa Felicidade corporativa",
    icon: smileySticker,
    backgroundImage: felicidade,
  },
  {
    title: "Bolsa de estudos",
    icon: student,
    backgroundImage: bolsas,
  },
  {
    title: "Receber materiais da Rede Autoestima-se",
    icon: bookOpenText,
    backgroundImage: receber,
  },
];

const instituicoes = () => {
  return (
    <div className={styles.instituicoes}>
      <Banner
        title="Instituições de Ensino"
        image={instituicoesPic}
        className={styles.banner}
      />

      <section className={styles.splitViewSection}>
        <div className={`${styles.split} ${styles.split1}`}>
          <h1 className={styles.mobileTitle}>
            Sua escola, universidade ou instituto federal precisa da gente?
          </h1>

          <Image
            src={instituicoesSplit1}
            alt="Imagem relativa ao título: Leve a Autoestima-se para sua empresa"
            className={styles.splitImage}
          />
          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                Sua escola, universidade ou instituto federal precisa da gente?
              </h1>
              <div className={styles.text}>
                <p>
                  A Rede Autoestima-se oferece suporte especializado para
                  escolas, universidades e institutos tecnológicos por meio de
                  diversas ações voltadas ao fortalecimento da saúde mental no
                  ambiente educacional.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.split} ${styles.split2}`}>
          <h1 className={styles.mobileTitle}>
            Somos uma ponte para a sua instituição
          </h1>

          <Image
            src={instituicoesSplit2}
            alt="Imagem relativa ao título: Leve a Autoestima-se para sua empresa"
            className={styles.splitImage}
          />

          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                Somos uma ponte para a sua instituição
              </h1>
              <div className={styles.text}>
                <p>
                  Nossa organização atua como uma ponte entre escolas e
                  oportunidades estratégicas ampliando as possibilidades de
                  desenvolvimento pessoal e profissional de toda a comunidade
                  escolar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Services}>Serviços</h1>
        <div className={styles.cardGrid}>
          <div className={styles.mainGrid}>
            <CardService
              title={cardData[0].title}
              icon={cardData[0].icon}
              backgroundImage={cardData[0].backgroundImage}
              // hoverText={cardData[0].hoverText}
            />
            <CardService
              title={cardData[1].title}
              icon={cardData[1].icon}
              backgroundImage={cardData[1].backgroundImage}
              // hoverText={cardData[1].hoverText}
            />
            <CardService
              title={cardData[2].title}
              icon={cardData[2].icon}
              backgroundImage={cardData[2].backgroundImage}
              // hoverText={cardData[2].hoverText}
            />
            <CardService
              title={cardData[3].title}
              icon={cardData[3].icon}
              backgroundImage={cardData[3].backgroundImage}
              // hoverText={cardData[3].hoverText}
            />
            <CardService
              title={cardData[4].title}
              icon={cardData[4].icon}
              backgroundImage={cardData[4].backgroundImage}
              // hoverText={cardData[4].hoverText}
            />
            <CardService
              title={cardData[5].title}
              icon={cardData[5].icon}
              backgroundImage={cardData[5].backgroundImage}
              // hoverText={cardData[5].hoverText}
            />
          </div>
          <div className={styles.secGrid}>
            <CardService
              title={cardData[6].title}
              icon={cardData[6].icon}
              backgroundImage={cardData[6].backgroundImage}
              heightClassName={styles.cardHeight}
              widthClassName={styles.cardWidth}
              // hoverText={cardData[6].hoverText}
            />
          </div>
        </div>
        <h2 className={styles.pServices}>
          Se sua escola ou universidade deseja contar com nosso apoio entre em
          contato conosco!
        </h2>
      </section>
      <Forms />
    </div>
  );
};

export default instituicoes;
