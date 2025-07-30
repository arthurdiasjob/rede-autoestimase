"use client";

import React, { useState, ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";
import "material-symbols";

const SeeMore = ({
  id,
  activeId,
  setActiveId,
  title,
  text,
  links,
}: {
  id: number;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
  title: string;
  text: string;
  links?: ReactElement[];
}) => {
  const isActive = id === activeId;

  return (
    <div
      className={styles.seeMore}
      onClick={() => setActiveId(isActive ? null : id)}
    >
      <div className={styles.seeMoreTitle}>
        {title}
        <span
          className={`${isActive ? styles.rotated : ""} 
          ${styles.seeMoreArrow} 
          material-symbols-outlined`}
        >
          expand_circle_down
        </span>
      </div>
      {isActive && (
        <div>
          <div className={styles.seeMoreText}>{text}</div>
          <div className={styles.seeMoreLinks}>
            {links?.map((link, index) => {
              if (!React.isValidElement<{ children?: ReactNode }>(link))
                return link;

              const linkText = link.props.children;
              const isLongText =
                typeof linkText === "string" && linkText.length > 5;

              return (
                <div key={index} className={isLongText ? styles.textLink : ""}>
                  {link}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const seeMoreData = [
  {
    title: "Demonstrativos Financeiros",
    text: "Acompanhe nossos demonstrativos financeiros e saiba como gerenciamos os recursos para garantir a sustentabilidade de nossos projetos.",
    links: [
      <a
        key={2020}
        href="https://drive.google.com/file/d/1KgJxnnRAt0Euh9vKVXFPYFjVjEsLAQ23/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        2020
      </a>,
      <a
        key={2021}
        href="https://drive.google.com/file/d/1e5m4Ezo0gJYH0l5fxxmlW1rknjWGdY_Q/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        2021
      </a>,
      <a
        key={2022}
        href="https://autoestimase-my.sharepoint.com/personal/rede_autoestimase_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frede%5Fautoestimase%5Fonmicrosoft%5Fcom%2FDocuments%2FDocumentos%20cont%C3%A1beis%2FBalancete%202022%2Epdf&parent=%2Fpersonal%2Frede%5Fautoestimase%5Fonmicrosoft%5Fcom%2FDocuments%2FDocumentos%20cont%C3%A1beis&ga=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        2022
      </a>,
      <a key={2023} href="#" target="_blank" rel="noopener noreferrer">
        2023
      </a>,
      <a key={2024} href="#" target="_blank" rel="noopener noreferrer">
        2024
      </a>,
      <a key={2025} href="#" target="_blank" rel="noopener noreferrer">
        2025
      </a>,
    ],
  },
  {
    title: "Relatório Anual de Realizações",
    text: "Explore nossos relatórios de atividades e veja de perto os impactos e resultados alcançados pelas nossas iniciativas ao longo do tempo.",
    links: [
      <a
        key={2020}
        href="https://drive.google.com/file/d/1HCz045ss91ad96D9qojsy4bVcozLCexI/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        2020
      </a>,
      <a
        key={2021}
        href="https://docs.google.com/document/d/11MxOX5yCyFMhBgVhlvF4k5xWUTlGVGU0P1Q3z_Xu_HQ/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        2021
      </a>,
      <a key={2022} href="#" target="_blank" rel="noopener noreferrer">
        2022
      </a>,
      <a key={2023} href="#" target="_blank" rel="noopener noreferrer">
        2023
      </a>,
      <a key={2024} href="#" target="_blank" rel="noopener noreferrer">
        2024
      </a>,
      <a key={2025} href="#" target="_blank" rel="noopener noreferrer">
        2025
      </a>,
    ],
  },
  {
    title: "Documentos de Constituição e Divulgação",
    text: "Acompanhe nossos documentos de constituição e divulgação e verifique as normativas e estruturas que compõem a Rede Autoestima-se.",
    links: [
      <a
        key={1}
        href="https://autoestimase-my.sharepoint.com/:b:/g/personal/rede_autoestimase_onmicrosoft_com/EWGKR8v5aylJiym88Uvc1-EBDO8dz5h13R5xghBdVKGouw?e=gEwSSP"
        target="_blank"
        rel="noopener noreferrer"
      >
        Estatuto Social em Português
      </a>,
      <a
        key={2}
        href="https://autoestimase-my.sharepoint.com/personal/rede_autoestimase_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frede%5Fautoestimase%5Fonmicrosoft%5Fcom%2FDocuments%2FEstatuto%20Social%2FSegunda%20vers%C3%A3o%20do%20Estatuto%20%2D%20Ingl%C3%AAs%2FEN%20Estatuto%20second%20version%2Epdf&parent=%2Fpersonal%2Frede%5Fautoestimase%5Fonmicrosoft%5Fcom%2FDocuments%2FEstatuto%20Social%2FSegunda%20vers%C3%A3o%20do%20Estatuto%20%2D%20Ingl%C3%AAs&ga=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Estatuto Social em Inglês
      </a>,
      <a
        key={3}
        href="https://docs.google.com/document/u/1/d/18fqd7Jc7DWcEFIzxvXfvHDB8RbU_Xje4/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Regimento interno
      </a>,
      <a
        key={4}
        href="https://drive.google.com/file/d/1gN1yV1iu79rKxrNg66AgU5CVz2tiQoHV/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brochura da Organização
      </a>,
      <a
        key={5}
        href="https://drive.google.com/file/u/1/d/10xEr1LJXI_Qt2o8a0YpjW3_kjg7znvaj/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Manual da Marca
      </a>,
    ],
  },
  {
    title: "Políticas Institucionais e de Gestão",
    text: "Acesse as políticas institucionais e de gestão que orientam os trabalhos diários na Rede Autoestima-se. Prezamos pelas políticas institucionais e sempre acompanhamos os resultados e melhorias com foco no trabalho compartilhado, na empatia e transparência.",
    links: [
      <a
        key={1}
        href="https://autoestimase-my.sharepoint.com/:b:/g/personal/rede_autoestimase_onmicrosoft_com/ETZxMU3-SONDqDZS1noOHIEBBFNMcNHxWeuaihiPNsHGYw?e=6hLcd8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Diretrizes de convivência, atuação e de boas-práticas
      </a>,
      <a
        key={2}
        href="https://docs.google.com/document/d/1pH-79rrG8Uc1OpKnjZC0XG6XXqgE_P0f2bpS580FuwQ/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Política do Centro de Custos
      </a>,
    ],
  },
  {
    title: "Protocolos de Atendimento",
    text: "Acesse as normativas que orientam os atendimentos psicológicos realizados na Rede Autoestima-se e fique por dentro de todas disposições!",
    links: [
      <a
        key={1}
        href="https://drive.google.com/file/d/1NXkdCXs1lSuSvMs5FRlql0JyxUdb3N2V/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Protocolo de atendimento psicológico
      </a>,
      <a
        key={2}
        href="https://drive.google.com/file/d/1TZ21CHaXBa9z3i0Xj_hyr74ogxm4kd4I/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contrato terapêutico
      </a>,
    ],
  },
];

export default function Transparencia() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <h2>ARQUIVOS</h2>
        <h1>Transparência</h1>
      </div>
      <div className={styles.textBox}>
        <p>
          A transparência é um dos pilares fundamentais da Rede Autoestima-se.
          Acreditamos que a confiança é construída por meio da clareza nas
          nossas ações e na gestão dos recursos que possibilitam nossos
          projetos. 
        </p>
        <br />
        <p>
          Aqui, você encontrará informações detalhadas sobre nossas fontes de
          financiamento, prestação de contas e o impacto social gerado por
          nossas atividades. 
        </p>
        <br />
        <p>
          Nosso compromisso é manter um diálogo aberto com a sociedade e nossos
          parceiros, garantindo que cada passo dado seja refletido com
          responsabilidade e ética.
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
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
}
