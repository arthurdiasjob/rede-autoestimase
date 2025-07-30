import React from "react";
import Image from "next/image";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import Forms from "@/components/Forms";
import empresasPic from "../../../../../public/assets/images/empresas/empresas.jpg";
import empresasSplit1 from "../../../../../public/assets/images/empresas/empresas-split1.jpg";
import empresasSplit2 from "../../../../../public/assets/images/empresas/empresas-split2.png";
import CardService from "@/components/CardService";
import brain from "../../../../../public/assets/icons/Brain.png";
import chalkboardTeacher from "../../../../../public/assets/icons/ChalkboardTeacher.png";
import lightbulb from "../../../../../public/assets/icons/Lightbulb.png";
import handHeart from "../../../../../public/assets/icons/HandHeart.png";
import psicoterapiaIndividual from "../../../../../public/assets/images/psicoterapia-individual.jpeg";
import apoioContinuo from "../../../../../public/assets/images/apoio-continuo.jpeg";
import treinamentos from "../../../../../public/assets/images/treinamentos-e-palestras.jpg";
import consultoria from "../../../../../public/assets/images/consultoria-empresarial.jpg";
import envelope from "../../../../../public/assets/icons/Envelope-emp.png";
import zap from "../../../../../public/assets/icons/WhatsappLogo.png";

const cardData = [
  {
    title: "Atendimentos de psicoterapia",
    icon: brain,
    backgroundImage: psicoterapiaIndividual,
  },
  {
    title: "Apoio Contínuo",
    icon: handHeart,
    backgroundImage: apoioContinuo,
  },
  {
    title: "Treinamentos e palestras",
    icon: chalkboardTeacher,
    backgroundImage: treinamentos,
  },
  {
    title: "Consultoria empresarial para demandas específicas da instituição",
    icon: lightbulb,
    backgroundImage: consultoria,
  },
];

const empresas = () => {
  return (
    <div className={styles.empresas}>
      <Banner title="Empresas" image={empresasPic} className={styles.banner} />
      <section className={styles.splitViewSection}>
        <div className={`${styles.split} ${styles.split1}`}>
          <h1 className={styles.mobileTitle}>
            Leve a Autoestima-se para sua empresa
          </h1>
          <Image
            src={empresasSplit1}
            alt="Imagem relativa ao título: Leve a Autoestima-se para sua empresa"
            className={styles.splitImage}
          />
          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                Leve a Autoestima-se para sua empresa
              </h1>
              <div className={styles.text}>
                <p>
                  Aqui na Rede Autoestima-se, oferecemos uma gama de serviços
                  personalizados para empresas que desejam promover o bem-estar
                  emocional e social de seus colaboradores. Nossos serviços
                  incluem: palestras, workshops, e programas de desenvolvimento
                  focados em saúde mental, diversidade, e inclusão no ambiente
                  de trabalho.
                </p>
                <p>
                  Além disso, realizamos consultorias para a criação de
                  ambientes de trabalho mais saudáveis e inclusivos, ajudando
                  sua empresa a implementar práticas que valorizam a saúde
                  mental e o bem-estar de toda a equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.split} ${styles.split2}`}>
          <h1 className={styles.mobileTitle}>
            Todas as vendas são revertidas para o trabalho social
          </h1>
          <Image
            src={empresasSplit2}
            alt="Imagem relativa ao título: Leve a Autoestima-se para sua empresa"
            className={styles.splitImage}
          />
          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                Todas as vendas são revertidas para o trabalho social{" "}
              </h1>
              <div className={styles.text}>
                <p>
                  Com uma abordagem humanizada e baseada em evidências, estamos
                  comprometidos em apoiar o crescimento sustentável das
                  organizações, promovendo uma cultura organizacional mais
                  empática e acolhedora.
                </p>
                <div className={styles.socials}>
                  <a
                    href={`mailto:"organizacao@redeautoestimase.com"`}
                    className={styles.mail}
                  >
                    <Image src={envelope} alt="Mail icon" />
                    <p>organizacao@redeautoestimase.com</p>
                  </a>
                  <a
                    href="https://wa.me/5575982133430"
                    className={styles.whatsApp}
                  >
                    <Image src={zap} alt="WhatsApp icon" />
                    <p>+55 (75) 98213-3430</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Services}>Serviços</h1>
        <div className={styles.cardGrid}>
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
        </div>
      </section>
      <Forms />
    </div>
  );
};

export default empresas;
