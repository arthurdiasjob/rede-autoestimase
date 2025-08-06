import React from "react";
import Image from "next/image";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import CardService from "@/components/CardService";
import Button from "@/components/Button/Button";

//Images and icons
import bannerJovens from "../../../../../public/assets/images/banner-jovens.jpeg";
import psicoterapiaIndividual from "../../../../../public/assets/images/psicoterapia-individual.jpeg";
import userList from "../../../../../public/assets/icons/UserList.png";
import apoioContinuo from "../../../../../public/assets/images/apoio-continuo.jpeg";
import handHeart from "../../../../../public/assets/icons/HandHeart.png";
import espacosDeAcolhimento from "../../../../../public/assets/images/espacos-de-acolhimento.jpeg";
import armchair from "../../../../../public/assets/icons/Armchair.png";
import carretDown from "../../../../../public/assets/icons/CaretDown.png";
import quotation from "../../../../../public/assets/icons/quotation.png";

const bannerData = [
  {
    text: "Projeto de Atendimento Psicológico para Jovens Ativistas",
    image: bannerJovens,
  },
];

const cardData = [
  {
    title: "Psicoterapia Individual",
    icon: userList,
    backgroundImage: psicoterapiaIndividual,
    hoverText:
      "Atendimentos personalizados com psicólogos especializados, focados em auxiliar jovens ativistas a lidar com a ansiedade, estresse, esgotamento emocional e questões relacionadas ao impacto de seu ativismo em suas vidas pessoais.",
  },
  {
    title: "Apoio Contínuo",
    icon: handHeart,
    backgroundImage: apoioContinuo,
    hoverText:
      "Durante três meses, nossos beneficiários são acompanhados semanalmente em sessões que promovem o autocuidado e o fortalecimento emocional, ajudando-os a equilibrar suas demandas pessoais e seu engajamento social.",
  },
  {
    title: "Espaços de Acolhimento",
    icon: armchair,
    backgroundImage: espacosDeAcolhimento,
    hoverText:
      "Criamos espaços de diálogo e apoio mútuo, como grupos de acolhimento, onde os jovens podem compartilhar suas experiências, desafios e conquistas, encontrando suporte em uma rede de pessoas que vivem contextos semelhantes.",
  },
];

const atendimentoParaAtivistas = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.projectDescription}>
        <Banner title={bannerData[0].text} image={bannerData[0].image} />
        <div className={styles.descriptionSubsection}>
          <p>
            O Projeto tem como objetivo cuidar da saúde mental de jovens que
            estão na linha de frente das transformações sociais. Sabemos que,
            enquanto lutam por causas fundamentais, esses jovens também
            enfrentam desafios emocionais e psicológicos, muitas vezes
            intensificados pela pressão, desgaste e sobrecarga que o ativismo
            pode trazer.
          </p>
        </div>
      </section>
      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Desk}>O que oferecemos</h1>
        <h1 className={styles.h1Mob}>Serviços</h1>
        <div className={styles.cardGrid}>
          <CardService
            title={cardData[0].title}
            icon={cardData[0].icon}
            backgroundImage={cardData[0].backgroundImage}
            hoverText={cardData[0].hoverText}
          />
          <CardService
            title={cardData[1].title}
            icon={cardData[1].icon}
            backgroundImage={cardData[1].backgroundImage}
            hoverText={cardData[1].hoverText}
          />
          <CardService
            title={cardData[2].title}
            icon={cardData[2].icon}
            backgroundImage={cardData[2].backgroundImage}
            hoverText={cardData[2].hoverText}
          />
        </div>
        <Button
          label="Solicitar atendimento"
          href="https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se"
        />
      </section>
      <section className={styles.impact}>
        <h1>Nosso Impacto</h1>
        <p>
          Desde 2022 mais de 60 jovens foram acolhidos pela Rede Autoestima-se e
          lançamos o primeiro estudo sobre a saúde mental do público em questão.
        </p>
        <p>
          O projeto é uma resposta ao crescente esgotamento emocional que muitos
          ativistas enfrentam, oferecendo suporte para que continuem firmes em
          suas causas, mas também se cuidem ao longo dessa jornada.
        </p>
        <p>
          Queremos que cada jovem ativista saiba que não está sozinho e que a
          sua saúde mental importa tanto quanto suas causas.
        </p>
        <div className={styles.seeMore}>
          <h3>Acesse nosso artigo completo.</h3>
          <Button
            label={"Clique aqui"}
            icon={carretDown}
            className={styles.content}
            classMenu={styles.menu}
            classItem={styles.item}
            dropdownOptions={[
              {
                label: "English",
                href: "https://bit.ly/BriefYoungActivists_RedeAutoestima-se",
              },
              {
                label: "Português",
                href: "https://bit.ly/Artigo_saudementalJovensAtivistas",
              },
            ]}
          />
        </div>
      </section>
      <section className={styles.testimonials}>
        <h1>Depoimentos</h1>
        <div className={styles.testimonialGrid}>
          <div>
            <Image src={quotation} alt="Quotation icon" />
            <p>
              “Me ajudou muito a me entender e lidar melhor comigo mesma, isso
              tem impactado diretamente nas minhas relações, na minha vida
              pessoal e profissional.”
            </p>
          </div>
          <div>
            <Image src={quotation} alt="Quotation icon" />
            <p>
              “Foi uma evolução bem grande, pois consegui abordar temas
              sensíveis como áreas da minha vida amorosa, trabalho e
              relacionamento com a família. Os temas caíram como luva no momento
              que estava vivendo o clímax de cada um e precisava da psicoterapia
              para refletir e repensar com tempo de qualidade. Me sinto mais
              resolvida e melhor, a Juliane é uma profissional incrível!”
            </p>
          </div>
          <div>
            <Image src={quotation} alt="Quotation icon" />
            <p>
              ”Me sinto mais confiante, feliz e um sentimento de liberdade.”
            </p>
          </div>
        </div>
        <Button
          label="Solicitar atendimento"
          href="https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se"
        />
      </section>
    </div>
  );
};

export default atendimentoParaAtivistas;
