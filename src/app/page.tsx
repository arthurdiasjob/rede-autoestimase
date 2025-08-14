"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import CountUp from "react-countup";

//Components and files
import Slider from "@/components/Slider";
import Button from "@/components/Button/Button";
import MediaSection from "@/components/MediaSection";
import smileyDivider from "../../public/assets/icons/smileyDivider.svg";
import advocacy from "../../public/assets/images/home/advocacy.png";
import comunicacao from "../../public/assets/images/home/comunicacao.png";
import psicossocial from "../../public/assets/images/home/psicossocial.png";
import saibaArrow from "../../public/assets/icons/saiba-mais-arrow.png";
import folha from "../../public/assets/icons/afolha.png";
import ashoka from "../../public/assets/icons/ashoka.png";
import onu from "../../public/assets/icons/onu.png";
import youth from "../../public/assets/icons/youth.png";
import ce from "../../public/assets/icons/ce.png";
import open from "../../public/assets/icons/opensociety.png";
import inia from "../../public/assets/icons/inia.png";
import mlabs from "../../public/assets/icons/mlabs.png";
import peace from "../../public/assets/icons/peacefirst.png";
import slack from "../../public/assets/icons/slack.png";
import icl from "../../public/assets/icons/icl.png";
import google from "../../public/assets/icons/google.png";
import micro from "../../public/assets/icons/microsoft.png";
import git from "../../public/assets/icons/github.png";
import canva from "../../public/assets/icons/canva.png";
import org from "../../public/assets/icons/organizacoes.png";
import orgMobile from "../../public/assets/icons/org-mobile.png";
import ashokaCol from "../../public/assets/icons/ashoka-col.png";
import afolhaCol from "../../public/assets/icons/afolha-col.png";
import meta from "../../public/assets/icons/metaverso-col.png";
import pinheiro from "../../public/assets/icons/pinheiro-col.png";
import bemtevi from "../../public/assets/icons/bemtevi.png";
import plus from "../../public/assets/icons/pluscircle.png";
import minus from "../../public/assets/icons/minuscircle.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Partners from "@/components/Partners/Partners";

type Card = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  link: string;
};

const cardContent: Card[] = [
  {
    title: "Assistência psicossocial",
    description:
      "Oferecemos atendimento psicológico de psicoterapia focal breve e grupos de acolhimento com profissionais da psicologia.",
    image: psicossocial,
    alt: "",
    link: "",
  },
  {
    title: "Comunicação",
    description:
      "Propagamos o tema da saúde mental para profissionais da saúde, mídia e sociedade.",
    image: comunicacao,
    alt: "",
    link: "",
  },
  {
    title: "Advocacy",
    description:
      "Trabalhamos para influenciar e defender as políticas de saúde mental e bem-estar.",
    image: advocacy,
    alt: "",
    link: "",
  },
];

type Reconhecimento = {
  icon: StaticImageData;
  subject: string;
};

const reconContent: Reconhecimento[] = [
  {
    icon: folha,
    subject: "Prêmio Empreendedor Social pela Folha de São Paulo",
  },
  {
    icon: ashoka,
    subject: "Reconhecimento da Rede Global Ashoka",
  },
  {
    icon: onu,
    subject: "Representante do Brasil na Delegação Jovem da ONU - YA",
  },
  {
    icon: youth,
    subject:
      "Representante do Brasil na Delegação Jovem do Banco Mundial- Youth Summit",
  },
  {
    icon: ce,
    subject: "Palestrante na Conferência Ethos 360°",
  },
];

export type Doadores = {
  logo: StaticImageData;
};

const doadoresLogos1: Doadores[] = [
  {
    logo: open,
  },
  {
    logo: inia,
  },
  {
    logo: mlabs,
  },
  {
    logo: peace,
  },
  {
    logo: slack,
  },
];

const doadoresLogos2: Doadores[] = [
  {
    logo: icl,
  },
  {
    logo: google,
  },
  {
    logo: micro,
  },
  {
    logo: git,
  },
  {
    logo: canva,
  },
];

const parceiros: Doadores[] = [
  {
    logo: ashokaCol,
  },
  {
    logo: afolhaCol,
  },
  {
    logo: meta,
  },
  {
    logo: pinheiro,
  },
  {
    logo: bemtevi,
  },
];

const seeMoreData = [
  {
    title:
      "A Rede Autoestima-se disponibiliza apoio psicológico para o público?",
    text: "Sim, oferecemos apoio psicológico gratuito, com foco em mulheres com até 65 anos e jovens de 13 a 29 anos, por meio de atendimentos online realizados por psicólogos (as) voluntários.",
  },
  {
    title: "Como funcionam os acolhimentos psicológicos?",
    text: "Os acolhimentos são realizados em sessões online, onde os participantes recebem suporte emocional em psicoterapia breve focal, com a triagem e orientação de profissionais qualificados e devidamente inscritos no Conselho Regional de Psicologia.",
  },
  {
    title: "Como funcionam os atendimentos para jovens com menos de 18 anos?",
    text: "Para jovens de 13 a 17 anos, os atendimentos são realizados com autorização dos responsáveis e seguem a mesma estrutura de acolhimento psicossocial oferecida aos demais beneficiários. Após solicitar o atendimento, encaminharemos via e-mail o documento.",
  },
  {
    title: "Quanto tempo dura a terapia?",
    text: "Ao todo são realizadas 12 sessões de psicoterapia com duração média de 45 minutos, 1 vezpor semana. Para solicitar o atendimento acesse: https://bit.ly/solicitarAtendimentoPsicologicoAutoestimase",
  },
  {
    title: "Como posso ser voluntário (a)?",
    text: "Para ser voluntário(a), você pode se inscrever em nossos processos seletivos ou caso você seja psicólogo (a), pode encaminhar o seu currículo para o e-mail: trabalheconosco@redeautoestimase.com com o Título: Candidatura Voluntária.",
  },
];

const SeeMore = ({
  id,
  activeId,
  setActiveId,
  title,
  text,
}: {
  id: number;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
  title: string;
  text: string;
}) => {
  const isActive = id === activeId;

  return (
    <div
      className={styles.seeMoreElement}
      onClick={() => setActiveId(isActive ? null : id)}
    >
      <div className={styles.seeMoreMain}>
        <div>{title}</div>
        {isActive ? (
          <Image
            src={minus}
            alt="Menos conteúdo"
            className={styles.rotateIcon}
          />
        ) : (
          <Image src={plus} alt="Mais conteudo" className={styles.rotateIcon} />
        )}
      </div>
      {isActive && <div className={styles.seeMoreText}>{text}</div>}
    </div>
  );
};

export default function Home() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div>
      <Slider />
      <section className={styles.homeAbout}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutHeader}>
            <div>SOBRE AUTOESTIMA-SE</div>
            <h1>O que nos traz aqui?</h1>
          </div>
          <div className={styles.aboutVideoMobile}>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/I0hvYveJDLQ"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <p className={styles.aboutDesc}>
            A Rede Autoestima-se é uma organização da sociedade civil sem fins
            lucrativos que desde 2020, democratiza o acesso a atendimentos
            psicológicos e práticas terapêuticas para mulheres e jovens
            ativistas em situação de vulnerabilidade social. Atuamos de forma
            online, beneficiando pessoas de diversas regiões do Brasil,
            oferecendo suporte psicossocial essencial para quem enfrenta
            desafios emocionais como:ansiedade, depressão e estresse, com foco
            especial nos jovens e mulheres negras.
          </p>

          <Button
            label="Acesse nossa ONE PAGE"
            className={styles.aboutButton}
          />
        </div>

        <div className={styles.aboutVideoDesk}>
          <iframe
            src="https://www.youtube.com/embed/I0hvYveJDLQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>

      <section className={styles.divider}>
        <Image
          src={smileyDivider}
          alt="Ícone de divisão de secção"
          className={styles.dividerIcon}
        />
      </section>

      <section className={styles.acolhimento}>
        <div className={styles.acolhimentoHeader}>
          <div>O QUE FAZEMOS</div>
          <h1>Acesso ao acolhimento emocional</h1>
        </div>
        <div className={styles.acolhimentoContent}>
          <div className={styles.cardContainer}>
            {cardContent.map((item, index) => (
              <div key={index} className={styles.cardElement}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className={styles.cardImage}
                />
                <div className={styles.cardElementContent}>
                  <div className={styles.cardDesc}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <button>
                    <Image
                      src={saibaArrow}
                      alt='Seta indicando o botão "SAIBA MAIS"'
                    />{" "}
                    <div>SAIBA MAIS</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.acolhimentoResultados}>
          <div className={styles.resultadosHeader}>
            <div>RESULTADOS</div>
            <h1>Nossas ações</h1>
            <p>
              Promovem o fortalecimento da saúde mental aliada à tecnologia para
              todo o Brasil através de uma comunidade digital.
            </p>
          </div>
          <div className={styles.acolhimentoCount}>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>
                <h1>
                  <CountUp end={1000} duration={3} separator="" />
                </h1>
              </div>
              <h2>sessões de psicoterapia realizadas</h2>
            </div>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>
                <h1>
                  <CountUp end={100} duration={3} separator="" />
                </h1>
              </div>
              <h2>cidades atendidas</h2>
            </div>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>

                <h1>
                  <CountUp end={18} duration={3} separator="" />
                </h1>
              </div>
              <h2>estados brasileiros atendidos</h2>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.conquistas}>
        <div className={styles.conquistasHeader}>
          <div>CONQUISTAS</div>
          <h1>Reconhecimentos</h1>
        </div>
        <div className={styles.conquistasCardContainer}>
          {reconContent.map((item, index) => (
            <div key={index} className={styles.conquistasCardElement}>
              <Image src={item.icon} alt="Logo da matéria" />
              <p>{item.subject}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.midia}>
        <div className={styles.midiaHeader}>
          <div>MÍDIA</div>
          <h1>A Rede na Mídia</h1>
        </div>
        <MediaSection />
      </section>

      <section className={styles.doadores}>
        <Sponsors
          doadoresLogos1={doadoresLogos1}
          doadoresLogos2={doadoresLogos2}
          org={org}
          orgMobile={orgMobile}
          Button={Button}
        />
        <Partners partnersLogo={parceiros} />
      </section>

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.faq}>
        <div className={styles.faqHeader}>
          <div>FAQ</div>
          <h1>Tire suas dúvidas</h1>
          <p>
            Reunimos respostas para as principais dúvidas sobre a Rede
            Autoestima-se e os atendimentos de psicoterapia. *A terapia online
            foi regulamentada no Brasil no dia 12 de novembro de 2018 por meio
            da Resolução do CFP 011/2018.
          </p>
        </div>
        <div className={styles.seeMoreWrapper}>
          {seeMoreData.map((item, index) => (
            <SeeMore
              key={index}
              id={index}
              activeId={activeId}
              setActiveId={setActiveId}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
