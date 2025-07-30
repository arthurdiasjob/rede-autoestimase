import Image from "next/image";
import SplitView from "@/components/SplitView/SplitView";
import Banner from "@/components/Banner/Banner";

import styles from "./styles.module.scss";

import visitaComunidade1 from "../../../../../public/assets/images/visitaComunidade1.png";
import jovemAtivista from "../../../../../public/assets/images/jovem-ativista.png";
import arara from "../../../../../public/assets/images/arara.png";
import indigena from "../../../../../public/assets/images/indigena.jpeg";
import visitaComunidade2 from "../../../../../public/assets/images/visita-comunidade-2.png";
import visitaComunidade3 from "../../../../../public/assets/images/visita-comunidade-3.png";

const bannerData = [
  {
    title: "Saúde Mental na Amazônia",
    image: visitaComunidade1,
  },
  {
    title:
      "Junte-se a nós nessa missão de cuidar e promover o bem-estar nas comunidades amazônicas!",
    image: indigena,
  },
];

const sectionData = [
  {
    title: "",
    text: "Estamos comprometidos em promover o bem-estar emocional e psicológico das comunidades amazônicas por meio do nosso projeto Saúde Mental na Amazônia. Reconhecemos a riqueza cultural e os desafios únicos enfrentados por essas populações e sabemos que a saúde mental é fundamental para o desenvolvimento sustentável e a qualidade de vida na região.",
  },
  {
    title: "Nossa atuação está apoiada em",
  },
  {
    title: "Como fazemos",
    text: "Utilizamos abordagens integrativas que respeitam a cultura local, oferecendo acolhimento e escuta ativa. Trabalhamos em colaboração com lideranças comunitárias e profissionais multidisciplinares para garantir que nossas intervenções sejam culturalmente relevantes e eficazes, atendendo às reais necessidades das comunidades. Fazemos tudo isso com apoio de parcerias estratégicas!\nPor meio do Projeto Saúde Mental na Amazônia, buscamos transformar vidas, contribuindo para um futuro onde a saúde mental seja priorizada, respeitada e acessível a todos.",
  },
];

const splitViewData = [
  {
    icon: "sentiment_satisfied",
    title: "Acessibilidade nos Atendimentos",
    text: "Oferecemos psicoterapia e orientação psicológica adaptadas às necessidades locais, com um foco especial em jovens e mulheres, garantindo que todos tenham acesso ao suporte necessário e respeitando as questões socioantropológicas.",
    image: visitaComunidade2,
    alt: "",
    reverse: false,
  },
  {
    icon: "book_2",
    title: "Educação e Conscientização",
    text: "Desenvolvemos materiais educativos e realizamos oficinas sobre saúde mental, promovendo o autoconhecimento e estratégias de enfrentamento.",
    image: visitaComunidade3,
    alt: "",
    reverse: true,
  },
];

export default function SaudeMentalNaAmazonia() {
  return (
    <div className={styles.pageContainer}>
      <Banner title={bannerData[0].title} image={bannerData[0].image} />

      <div className={styles.contentContainer}>
        <div className={styles.card}>
          <Image src={jovemAtivista} alt="" className={styles.resizeImages} />
        </div>
        <div className={styles.textBox}>
          <p>{sectionData[0].text}</p>
        </div>
      </div>

      <div className={styles.splitViewContainer}>
        <h2 className={styles.sectionTitle}>{sectionData[1].title}</h2>
        <div className={styles.splitViewWrapper}>
          {splitViewData.map((splitView, index) => (
            <SplitView
              key={index}
              icon={splitView.icon}
              title={splitView.title}
              text={splitView.text}
              image={splitView.image}
              alt={splitView.alt}
              reverse={splitView.reverse}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.contentContainer} ${styles.section2}`}>
        <div className={styles.ornament}>
          <Image src={arara} alt="" className={styles.resizeImages} />
        </div>
        <div className={styles.textBox}>
          <h2 className={styles.sectionTitle}>{sectionData[2].title}</h2>
          {sectionData[2].text?.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>

      <Banner
        className={styles.banner}
        title={bannerData[1].title}
        image={bannerData[1].image}
      />
    </div>
  );
}
