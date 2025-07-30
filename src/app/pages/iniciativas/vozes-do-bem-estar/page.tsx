import Banner from "@/components/Banner/Banner";

import styles from "./styles.module.scss";
import vozezDoBemEstar from "../../../../../public/assets/images/vozes-do-bem-estar.jpg";
import CardNews from "@/components/CardNews/CardNews";

const newsList = Array(8).fill({ title: "JANEIRO", year: "2025", href: "/" });

export default function VozesDoBemEstar() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Banner
          title="Vozes do Bem-Estar"
          image={vozezDoBemEstar}
          alt="Mulher sorrindo enquanto olha para um celular"
        />
      </div>

      <section className={styles.descSection}>
        <p className={styles.description}>
          O canal oficial de comunicação da Rede Autoestima-se, reunindo nossas
          últimas produções, notícias e publicações que inspiram e informam
          sobre saúde mental, bem-estar e práticas de autocuidado. Através desse
          espaço, compartilhamos artigos, cartilhas, atualizações de projetos e
          histórias de impacto que refletem nosso compromisso com a
          transformação social.
        </p>
        <div className={styles.newsletter}>
          <h2>Receba por e-mails todas as novidades</h2>
          <div>COMPONENTE DE EMAIL</div>
        </div>
      </section>

      <section className={styles.newsWrapper}>
        <h2>
          Acompanhe nossas novidades e faça parte dessa rede de conhecimento e
          acolhimento!
        </h2>
        <div className={styles.news}>
          {newsList.map((news, index) => (
            <CardNews
              key={index}
              title={news.title}
              year={news.year}
              href={news.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
