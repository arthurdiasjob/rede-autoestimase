"use client";
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";

import bannerDoe from "./../../../../public/assets/images/doe/banner.png";

const bannerData = {
  title: "Apoie nossa causa",
  image: bannerDoe,
};

export default function Doe() {
  return (
    <div className={styles.container}>
      <Banner title={bannerData.title} image={bannerData.image} />
      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>NOSSA PARTE</span>
          <br />
          <span className={styles.highlight}>
            A REDE AUTOESTIMA-SE vai doar
          </span>
        </h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/logo.png"
              alt="Logo Autoestima-se"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Licenciamento de Marca</h3>
            <p>
              Empresas podem fortalecer seu valor ao utilizar a marca Rede
              Autoestima-se, referência em saúde mental no Brasil.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/selo.png"
              alt="Selo Empresa Amiga"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Selo de Empresa Amiga</h3>
            <p>
              O licenciamento, com o Selo de Empresa Amiga da Saúde Mental,
              destaca o compromisso com o bem-estar, oferecendo visibilidade e
              impacto positivo.
            </p>
            <button className={styles.ctaButton}>Seja uma Empresa Amiga</button>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/servico.png"
              alt="Serviços e Contrapartidas"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Serviços e Contrapartidas</h3>
            <p>
              Com atuação nacional, oferecemos serviços que beneficiam empresas
              e colaboradores, em troca de apoio para expandir nosso impacto.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.introSection}>
        <h1 className={styles.title}>DOE AGORA</h1>
        <p className={styles.description}>PLANO DE DOAÇÃO</p>
      </section>
      <div className={styles.iframeWrapper}>
        <iframe
          src="https://redeautoestimase.paradoar.org/"
          frameBorder="0"
          title="Doe agora"
          width="100%"
          height="100%"
        />
      </div>

      {/* <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>NOSSA PARTE</span>
          <br />
          <span className={styles.highlight}>
            A REDE AUTOESTIMA-SE vai doar
          </span>
        </h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/logo.png"
              alt="Logo Autoestima-se"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Licenciamento de Marca</h3>
            <p>
              Empresas podem fortalecer seu valor ao utilizar a marca Rede
              Autoestima-se, referência em saúde mental no Brasil.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/selo.png"
              alt="Selo Empresa Amiga"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Selo de Empresa Amiga</h3>
            <p>
              O licenciamento, com o Selo de Empresa Amiga da Saúde Mental,
              destaca o compromisso com o bem-estar, oferecendo visibilidade e
              impacto positivo.
            </p>
            <button className={styles.ctaButton}>Seja uma Empresa Amiga</button>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/servico.png"
              alt="Serviços e Contrapartidas"
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>Serviços e Contrapartidas</h3>
            <p>
              Com atuação nacional, oferecemos serviços que beneficiam empresas
              e colaboradores, em troca de apoio para expandir nosso impacto.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
