"use client";
import Mapa from "@/components/Map/index";
import Banner from "@/components/Banner/Banner";
import styles from "./styles.module.scss";
import Image from "next/image";
import EmojiDivider from "@/components/emoji/EmojiDivider";
import { StaticImageData } from "next/image";
import AwardsSection from "@/components/AwardsData/AwardsSection";
import AwardsSectionMobile from "@/components/AwardsData/AwardsSectionMobile";
import { useMediaQuery } from "@react-hook/media-query";
import Timeline from "@/components/Timeline/Timeline";
import bannersobrenos from "../../../../public/assets/images/bannerSobreNos.jpg";
import perfil from "../../../../public/assets/images/premios/perfil.png";
import ODS3 from "../../../../public/assets/images/premios/ods3.png";
import ODS5 from "../../../../public/assets/images/premios/ods5.png";
import ODS10 from "../../../../public/assets/images/premios/ods10.png";
import governofederal from "../../../../public/assets/images/premios/Governo.png";
import samgov from "../../../../public/assets/images/premios/SAMGOV.png";
import React, { useState } from "react";

const bannerData = {
  title: "Nossa história",
  image: bannersobrenos,
};

const selos = [
  { image: governofederal, alt: "Governo Federal" },
  { image: samgov, alt: "SAMGOV" },
];

interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: StaticImageData;
}

interface TeamData {
  diretoria: TeamMember[];
  conselho: TeamMember[];
  voluntarios: TeamMember[];
}

type TeamCategoryKey = keyof TeamData;

const teamData: TeamData = {
  diretoria: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
  conselho: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
  voluntarios: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
};

const odsData = [
  {
    icon: ODS3,
    number: "ODS 3",
    title: "Saúde e Bem-estar",
    description:
      "Promovemos saúde mental acessível e de qualidade por meio de atendimentos psicossociais gratuitos, focados no acolhimento emocional de mulheres e jovens que enfrentam desafios de ansiedade, depressão e estresse. Através de psicoterapia breve focal e grupos de acolhimento, ajudamos a melhorar o bem-estar das populações mais vulneráveis.",
  },
  {
    icon: ODS5,
    number: "ODS 5",
    title: "Igualdade de gênero",
    description:
      "Apoiamos a autonomia emocional e social de mulheres, que representam 80% dos nossos beneficiários. Nosso objetivo é fortalecer a saúde mental feminina, promovendo espaços de acolhimento e desenvolvimento para que essas mulheres possam exercer seu protagonismo na sociedade.",
  },
  {
    icon: ODS10,
    number: "ODS 10",
    title: "Redução das Desigualdades",
    description:
      "Atuamos para reduzir as desigualdades raciais e socioeconômicas, atendendo principalmente jovens e mulheres negras. Oferecemos suporte emocional e oportunidades de crescimento pessoal para aqueles que têm acesso limitado a serviços de saúde mental, visando promover a equidade e justiça social.",
  },
];

function Selo() {
  return (
    <section className={styles.selosContainer}>
      <h3>Selos e inscrições</h3>
      <div className={styles.selos}>
        {selos.map((selo, index) => (
          <Image
            key={index}
            src={selo.image}
            alt={selo.alt}
            width={150}
            height={90}
          />
        ))}
      </div>
    </section>
  );
}

export default function SobreNos() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [slideIndex, setSlideIndex] = useState({ conselho: 0, voluntarios: 0 });
  const [fade, setFade] = useState({ conselho: false, voluntarios: false });
  const pageSize = 3;

  const handleSlide = (
    key: "conselho" | "voluntarios",
    direction: "left" | "right",
    total: number
  ) => {
    setFade((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setSlideIndex((prev) => {
        const maxIndex = Math.max(0, Math.ceil(total / pageSize) - 1);
        let next = prev[key] || 0;
        if (direction === "left") next = Math.max(0, next - 1);
        if (direction === "right") next = Math.min(maxIndex, next + 1);
        return { ...prev, [key]: next };
      });
      setFade((prev) => ({ ...prev, [key]: false }));
    }, 400); // tempo igual ao transition do CSS
  };

  return (
    <div className={styles.pageContainer}>
      <Banner
        title={bannerData.title}
        image={bannerData.image}
        className={styles.banner}
      />
      <EmojiDivider />
      <section className={styles.contentSection}>
        <div className={styles.textWarrper}>
          <div className={styles.textContainer}>
            <p>
              A Rede Autoestima-se tem sua origem em 2020 na cidade interiorana
              de Conceição do Almeida, região do Recôncavo Baiano, no Estado da
              Bahia, a partir da mobilização da ativista Mariana Nunes, atual
              diretora executiva e presidente da organização, na época com
              apenas 17 anos.
            </p>
            <p>
              Da ideia inicial, de rodas de conversas presenciais sobre saúde
              mental, autoconhecimento e temas afins, as atividades se
              estenderam, de forma online, para todo o Brasil, chegando ao
              modelo atual, com a participação de psicólogos voluntários
              oferecendo atendimento virtual. Já em 2021, o trabalho foi
              reconhecido pela Rede Global da Ashoka, que fortaleceu a
              instituição nos canais de comunicação no território nacional.
            </p>
            <p>
              Em 2022, a Open Society Foundations doou à Rede Autoestima-se a
              primeira receita financeira com foco no fortalecimento
              institucional. Pouco tempo depois, a organização e sua fundadora
              representaram o Brasil na Assembleia Jovem da ONU (Organização das
              Nações Unidas).
            </p>
          </div>
          <div className={styles.textContainer}>
            <p>
              De lá para cá, a Rede Autoestima-se cresceu em muitos sentidos.
              Aumentou o número de beneficiários; consolidou a sua metodologia;
              ampliou o propósito institucional, abrangendo também jovens
              ativistas de 14 até 29 anos; conquistou um papel relevante na
              saúde mental através do acolhimento emocional e em 2024 recebeu o
              Prêmio Empreendedor Social na categoria Jovens Transformadores
              fornecido pela Folha de São Paulo.
            </p>
            <p>
              Hoje, a Rede Autoestima-se desenvolve suas atividades sociais por
              meio de três eixos de atuação: assistência psicossocial,
              comunicação e advocacy, tendo como importantes diferenciais a sua
              proposta de fortalecer a saúde mental aliada à tecnologia e a
              qualificação sistemática da equipe. Nesses 5 anos de atuação,
              cerca de 1000 atendimentos foram realizados, levando uma vida
              melhor para muitas brasileiras e brasileiros. Muitos virão!
            </p>
          </div>
        </div>
      </section>

      {isMobile ? (
        <>
          <Timeline />
          <AwardsSectionMobile />
        </>
      ) : (
        <>
          <AwardsSection />
          <Selo />
          <Timeline />
        </>
      )}

      <section className={styles.teamSection}>
        <div className={styles.teamSectiontexto}>
          <p>Equipe</p>
          <h2>Profissionais que atuam na causa</h2>
        </div>
        <div className={styles.titletexto}>
          <a>
            Nosso time é formado por uma rede de profissionais e voluntários
            comprometidos em promover o bem-estar emocional e o acesso
            democrático à saúde mental. Psicólogos (as), comunicadores, gestores
            e ativistas trabalham juntos para oferecer um atendimento acolhedor
            e qualificado. Acreditamos que, com uma equipe diversa e dedicada,
            podemos transformar vidas e fortalecer a saúde mental de quem mais
            precisa.
          </a>
        </div>
        {[
          { titulo: "DIRETORIA", chave: "diretoria" as TeamCategoryKey },
          { titulo: "CONSELHO", chave: "conselho" as TeamCategoryKey },
          { titulo: "VOLUNTÁRIOS", chave: "voluntarios" as TeamCategoryKey },
        ].map((categoria, i) => {
          const membros = teamData[categoria.chave];
          if (categoria.chave === "diretoria") {
            const membrosDiretoria = membros.slice(0, 3);
            return (
              <div key={i} className={styles.teamCategory}>
                <h3>{categoria.titulo}</h3>
                <div className={styles.sliderWrapper}>
                  <div className={styles.teamGrid}>
                    {membrosDiretoria.map(
                      (member: TeamMember, index: number) => (
                        <div key={index} className={styles.teamMember}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className={styles.memberImage}
                          />
                          <h4>{member.name}</h4>
                          <p>{member.title}</p>
                          <a>{member.role}</a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          }
          const key = categoria.chave as "conselho" | "voluntarios";
          const current = slideIndex[key] || 0;
          const start = current * pageSize;
          const end = start + pageSize;
          const pagedMembros = membros.slice(start, end);
          const maxIndex = Math.max(
            0,
            Math.ceil(membros.length / pageSize) - 1
          );
          return (
            <div key={i} className={styles.teamCategory}>
              <h3>{categoria.titulo}</h3>
              <div className={styles.sliderWrapper}>
                <button
                  onClick={() => handleSlide(key, "left", membros.length)}
                  className={styles.navButton}
                  disabled={current === 0 || fade[key]}
                >
                  <Image
                    src="/assets/images/sobrenos/arrow-left.png"
                    alt="Voltar"
                    width={40}
                    height={40}
                  />
                </button>
                <div
                  className={`${styles.teamGrid} ${
                    fade[key] ? styles["fade-exit"] : ""
                  }`}
                >
                  {pagedMembros.map((member: TeamMember, index: number) => (
                    <div key={index} className={styles.teamMember}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className={styles.memberImage}
                      />
                      <h4>{member.name}</h4>
                      <p>{member.title}</p>
                      <a>{member.role}</a>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleSlide(key, "right", membros.length)}
                  className={styles.navButton}
                  disabled={current === maxIndex || fade[key]}
                >
                  <Image
                    src="/assets/images/sobrenos/arrow-right.png"
                    alt="Avançar"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <section className={styles.citiesSection}>
        <h2>ONDE ESTAMOS</h2>
        <h3>Cidades atendidas no Brasil</h3>
        <Mapa />
      </section>
      <EmojiDivider />

      <section className={styles.odsSection}>
        <h3>SUSTENTABILIDADE</h3>
        <h2>
          Juntas, construímos uma rede de apoio mais sustentável, incluindo o
          clube de possibilidades.
        </h2>
        <Image
          src="/assets/images/premios/logoObj.png"
          alt="objetivos de desenvolvimento sustentável"
          width={334}
          height={48}
          className={styles.objImage}
        />
        <p>
          A Rede Autoestima-se é uma organização comprometida com a promoção dos
          Objetivos de Desenvolvimento Sustentável (ODS), oferecendo apoio
          psicossocial gratuito e acessível para mulheres e jovens em situação
          de vulnerabilidade. Nossa missão é contribuir para o bem-estar
          emocional, promovendo saúde mental (ODS 3), igualdade de gênero (ODS
          5) e a redução das desigualdades (ODS 10). Por meio de atendimentos
          online realizados por psicólogos voluntários, aliamos tecnologia e
          acolhimento humano para impactar positivamente vidas e transformar
          comunidades em todo o Brasil.
        </p>
        <div className={styles.odsGrid}>
          {odsData.map((ods, index) => (
            <div key={index} className={styles.odsCard}>
              <Image
                src={ods.icon}
                alt={ods.title}
                width={120}
                height={120}
                className={styles.odsIcon}
              />
              <span className={styles.odsNumber}>{ods.number}</span>
              <h4>{ods.title}</h4>
              <p>{ods.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.metasContainer}>
        <h2>Metas para os próximos 6 anos</h2>
        <div className={styles.metasGrid}>
          <div className={styles.metaItem}>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/Icon-grafico.png"
                alt="ícone gráfico"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaText}>
              <h3>Reduzir em 90% a impressão de materiais físicos:</h3>
              <p>
                Estamos comprometidos em minimizar o uso de materiais impressos,
                tanto publicitários quanto de escritório, visando reduzir
                significativamente nosso impacto ambiental.
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-pessoas.png"
                alt="ícone gráfico"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol2}>
              <h3>Atingir a marca de 2 mil pessoas atendidas:</h3>
              <p>
                Expandiremos nossos serviços para alcançar e oferecer suporte
                psicológico e social a 2 mil pessoas, promovendo bem-estar e
                inclusão.
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-map.png"
                alt="ícone gráfico"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol3}>
              <h3>
                Garantir que 90% da equipe de liderança seja composta por
                profissionais das regiões Norte e Nordeste:
              </h3>
              <p>
                Estamos trabalhando para aumentar a representatividade regional,
                fortalecendo o protagonismo de talentos dessas áreas em nossa
                estrutura de liderança.
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-folha.png"
                alt="ícone gráfico"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol4}>
              <h3>
                Alinhar 75% dos parceiros e fornecedores com práticas
                sustentáveis:
              </h3>
              <p>
                Nosso objetivo é garantir que a maioria de nossas parcerias seja
                com fornecedores comprometidos com a sustentabilidade e a
                descarbonização, contribuindo para um futuro mais verde.
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-sol.png"
                alt="ícone gráfico"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol5}>
              <h3>
                Oferecer incentivos financeiros para o uso de energia limpa:
              </h3>
              <p>
                Vamos apoiar financeiramente nossos profissionais de psicologia
                e o público assistido na contratação de energia renovável para
                os atendimentos online, promovendo uma transição para fontes
                energéticas mais sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
