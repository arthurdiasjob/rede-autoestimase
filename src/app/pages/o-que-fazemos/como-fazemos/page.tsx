"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";

const ComoFazemos = () => {
  const sections = [
    {
      title: "Oferecemos",
      description:
        "Atendimentos de psicoterapia breve online em 12 sessões para jovens e mulheres de 13 até 65 anos, orientação psicológica para pais e responsáveis, materiais sobre saúde emocional, práticas integrativas, palestras, rodas de conversas e oficinas.",
      image: "/assets/images/BannerOferecemos.jpg",
    },
    {
      title: "Intervimos",
      description:
        "Em problemas mentais e emocionais de ansiedade, questões referentes às relações com a família, relações interpessoais, trabalho e estudos para minimizar o aumento dos transtornos.",
      image: "/assets/images/BannerIntervimos.jpg",
    },
    {
      title: "Acolhemos",
      description:
        "As pessoas são acompanhadas semanalmente durante três meses.",
      image: "/assets/images/BannerAcolhemos.jpg",
    },
    {
      title: "Comunicamos",
      description:
        "Estudamos as demandas dos pacientes e produzimos materiais de comunicação de ampla divulgação na sociedade para prevenção em saúde mental. Exemplo: artigos e cartilhas.",
      image: "/assets/images/BannerComunicamos.jpg",
    },
  ];

  const strategies = [
    {
      title: "Estratégia de Crescimento e Inclusão",
      description:
        "Desenvolvemos uma estratégia focada na promoção do autoconhecimento, que é o elemento central de todas as nossas iniciativas. Nós acreditamos que, ao se conhecerem melhor, as pessoas conseguem lidar de forma mais eficaz com seus problemas emocionais e relacionais, gerando um impacto positivo em suas vidas e nas comunidades ao redor. Nosso trabalho não se limita apenas ao tratamento individual. Também proporcionamos orientação psicológica para pais e responsáveis, visando melhorar o ambiente familiar e facilitar o diálogo intergeracional. Para além dos atendimentos, a Rede Autoestima-se se dedica à educação em saúde mental, produzindo materiais informativos que têm como objetivo prevenir o agravamento de transtornos mentais e conscientizar a sociedade.",
      icon: "/assets/icons/growth.png",
    },
    {
      title: "Estratégia Digital para Fortalecer a Comunidade",
      description:
        "Acreditamos no poder da comunidade e por isso, nossa estratégia digital é desenhada para conectar, apoiar e engajar pessoas de forma contínua. Utilizamos plataformas online para ampliar o acesso ao bem-estar emocional, criando espaços seguros e acolhedores onde jovens e mulheres podem compartilhar experiências, aprender e crescer juntas. Apostamos em ferramentas digitais que facilitam o diálogo e a troca de conhecimentos entre os membros da nossa comunidade. Grupos online, fóruns de discussão, rodas de conversa virtuais e eventos ao vivo são parte da nossa rotina, promovendo debates sobre temas como saúde mental, autoconhecimento e relações interpessoais. Assim, criamos um ambiente em que todos podem se expressar, ouvir e apoiar uns aos outros. Além disso, nossa produção de conteúdo digital é focada em oferecer informações relevantes e práticas, desde artigos e vídeos educativos e cartilhas interativas, sempre com o objetivo de promover a prevenção em saúde mental e o fortalecimento do autoconhecimento. Através das redes sociais e newsletters, nós mantemos nossa comunidade atualizada sobre novos materiais, eventos e iniciativas, incentivando o engajamento constante. Nossa estratégia digital também se compromete com a inclusão, assegurando que pessoas de diferentes regiões e contextos sociais, especialmente das regiões Norte e Nordeste, tenham acesso facilitado aos nossos conteúdos e atendimentos. Investimos em ferramentas acessíveis e em parcerias estratégicas que compartilham dos mesmos valores de sustentabilidade e inclusão. Com uma estratégia digital focada no fortalecimento comunitário, nós criamos laços que transcendem o espaço físico, ajudando nossos participantes a se sentirem parte de uma rede que apoia e empodera em todos os momentos.",
      icon: "/assets/icons/digital.png",
    },
    {
      title:
        "Estratégia de Bem-Estar Financeiro: Cuidando da Saúde Emocional e Econômica",
      description:
        "Entendemos que o bem-estar financeiro é parte fundamental da saúde integral. Por isso, nossa estratégia de bem-estar financeiro visa promover não apenas o equilíbrio emocional, mas também a segurança econômica, oferecendo ferramentas e oportunidades que ajudam a reduzir o estresse financeiro e melhorar a qualidade de vida. Como parte dessa estratégia, oferecemos incentivos e apoio financeiro para que nossos beneficiários possam tomar decisões mais sustentáveis e conscientes, como: parcerias com instituições de consultoria financeira e doação de bolsas de cursos de aperfeiçoamento. Paralelamente, desenvolvemos conteúdos educativos focados em gestão financeira, que são disponibilizados e esses materiais incluem dicas sobre organização financeira, planejamento de despesas e conscientização sobre como o bem-estar financeiro impacta a saúde emocional. Nossas rodas de conversa e palestras também abordam esses temas, incentivando uma visão mais integrada entre finanças e saúde mental. Nós acreditamos que, ao criar um ambiente onde o suporte emocional e o bem-estar financeiro andam juntos, estamos proporcionando às pessoas ferramentas para tomarem decisões mais equilibradas e conscientes, tanto em suas vidas pessoais quanto profissionais. Por meio dessa estratégia, buscamos criar um ciclo positivo, em que o alívio do estresse financeiro contribui para o crescimento emocional. Além disso, criamos o Fundo AutoViver que é totalmente inovador. Um fundo de bem-estar financeiro que visa apoiar nossos beneficiários, aliando saúde financeira à promoção da autoestima.",
      icon: "/assets/icons/finance.png",
    },
  ];

  const [expanded, setExpanded] = useState(
    Array(strategies.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className={styles.comoFazemos}>
      <h1 className={styles.title_text}>COMO FAZEMOS</h1>
      <h2 className={styles.title}>
        <span className={styles.noBreak}>O autoconhecimento</span> é o pilar da
        metodologia <br />
        da Rede Autoestima-se
      </h2>

      <div className={styles.cardsContainer}>
        {sections.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.image}
              width={400}
              height={300}
            />
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.strategyWrapper}>
        <div className={styles.strategiesContainer}>
          {strategies.map((strategy, index) => {
            const paragraphs = strategy.description.split(". ");
            return (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.teste}>
                  <Image
                    src={strategy.icon}
                    alt={strategy.title}
                    className={styles.icon}
                    width={64}
                    height={64}
                  />
                  <h3 className={styles.strategyTitle}>{strategy.title}</h3>
                </div>
                <div className={styles.description_teste}>
                  {expanded[index] ? (
                    paragraphs.map((paragraph, i) => (
                      <p key={i} className={styles.strategyDescription}>
                        {paragraph.trim() +
                          (paragraph.endsWith(".") ? "" : ".")}
                      </p>
                    ))
                  ) : (
                    <p className={styles.strategyDescription}>
                      {paragraphs[0]}.
                    </p>
                  )}

                  {paragraphs.length > 1 && (
                    <button
                      className={styles.expandButton}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? "Ver menos" : "Ver mais"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComoFazemos;
