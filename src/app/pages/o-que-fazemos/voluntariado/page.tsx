import Banner from "@/components/Banner/Banner";
import CardStep from "@/components/CardStep/CardStep";
import CardService from "@/components/CardService";

import styles from "./styles.module.scss";
import verified from "../../../../../public/assets/icons/verified.svg";
import "material-symbols";

import voluntariado from "../../../../../public/assets/images/voluntariado.jpeg";
import groupConversation from "../../../../../public/assets/images/group-conversation.jpeg";

import groupOfPeople1 from "../../../../../public/assets/images/groupOfPeople1.jpeg";
import groupOfPeople2 from "../../../../../public/assets/images/groupOfPeople2.jpeg";
import groupOfPeople3 from "../../../../../public/assets/images/groupOfPeople3.jpeg";
import groupOfPeople4 from "../../../../../public/assets/images/groupOfPeople4.jpeg";
import groupOfPeople5 from "../../../../../public/assets/images/groupOfPeople5.jpeg";
import groupOfPeople6 from "../../../../../public/assets/images/groupOfPeople6.jpeg";

const servicesData = [
  {
    title:
      "Atuação em rede colaborativa com a oportunidade de conhecer pessoas de diversas regiões do Brasil",
    backgroundImage: groupOfPeople1,
  },
  {
    title:
      "Certificado de participação, reconhecendo seu trabalho e dedicação.",
    backgroundImage: groupOfPeople2,
  },
  {
    title: "Apoio e acolhimento emocional ao longo de toda a experiência",
    backgroundImage: groupOfPeople3,
  },
  {
    title: "Cartas de recomendação para fortalecer seu perfil profissional",
    backgroundImage: groupOfPeople4,
  },
  {
    title: "Acesso a ofertas exclusivas e oportunidades de networking",
    backgroundImage: groupOfPeople5,
  },
  {
    title:
      "Ambiente inclusivo e voltado ao desenvolvimento pessoal e profissional",
    backgroundImage: groupOfPeople6,
  },
];

const stepsData = [
  {
    number: "01",
    title: "Candidatura",
    text: (
      <>
        Caso você seja psicólogo (a) preencha o Formulário. Para outras funções
        envie o seu currículo e carta de motivação para o e-mail:{" "}
        <a
          href="mailto:trabalheconosco@redeautoestimase.com"
          style={{ color: "unset", textDecoration: "underline" }}
        >
          trabalheconosco@redeautoestimase.com
        </a>{" "}
        com o título: CANDIDATURA VOLUNTÁRIA. O tempo mínimo para atuar como
        voluntário (a) é de 6 meses.
      </>
    ),
  },
  {
    number: "02",
    title: "Participação em Entrevistas",
    text: "Participação em Entrevistas: Após sua inscrição, entraremos em contato para uma conversa, onde você poderá compartilhar suas motivações e experiências. A entrevista tem duração média de 40 minutos e poderá ser de 1 a 3 entrevistas com diferentes integrantes do time.",
  },
  {
    number: "03",
    title: "Treinamento",
    text: "Todos os voluntários passam por um treinamento que os prepara para atuar de maneira efetiva e acolhedora.",
  },
  {
    number: "04",
    title: "Integração à Equipe",
    text: "Após o treinamento, você será integrado(a) à nossa equipe, participando de atividades, encontros em rede e projetos conforme suas habilidades e interesses.",
  },
];

export default function Voluntariado() {
  return (
    <div className={styles.pageContainer}>
      <Banner
        className={styles.banner}
        title="Voluntariado"
        image={voluntariado}
      />
      <section className={styles.volunteering}>
        <div className={styles.icon}>
          <span className="material-symbols-outlined">sentiment_satisfied</span>
        </div>

        <p className={styles.textBox}>
          Nosso voluntariado é uma oportunidade incrível para quem deseja fazer
          a diferença na vida de jovens e mulheres que enfrentam desafios
          emocionais e sociais.
          <br />
          <br />
          Como voluntário(a), você se tornará parte de uma comunidade dedicada a
          promover o bem-estar e a autoestima. Oferecemos diversas formas de
          atuação, desde atendimentos psicológicos até atividades de mobilização
          e sensibilização. Aqui, sua empatia e habilidades serão valiosas para
          criar um impacto positivo.
        </p>
      </section>

      <section className={styles.advantages}>
        <h1>Vantagens de ser voluntário</h1>
        <div className={styles.cardAdvantagesWrapper}>
          {servicesData.map((service, index) => (
            <div className={styles.cardService} key={index}>
              <CardService
                title={service.title}
                icon={verified}
                backgroundImage={service.backgroundImage}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howToJoin}>
        <Banner
          className={styles.banner}
          title="Como fazer parte"
          image={groupConversation}
        />

        <div className={styles.cardStepsWapper}>
          {stepsData.map((step, index) => (
            <CardStep
              key={index}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>

        <h2 className={styles.subtitleBox}>
          Junte-se a nós e ajude a construir um espaço onde todas as vozes são
          ouvidas e valorizadas. Na Rede Autoestima-se, sua contribuição pode
          ser a chave para a transformação de vidas!
        </h2>
      </section>
    </div>
  );
}

//
