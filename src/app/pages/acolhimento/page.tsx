import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

//Components and archives
import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";
import bannerAcolhimento from "../../../../public/assets/images/acolhimento/banner-acolhimento.jpg";
import smileyDivider from "../../../../public/assets/icons/smileyDivider.svg";
import acolhimento from "../../../../public/assets/images/acolhimento/acolhimento.jpg";
import carretDown from "../../../../public/assets/icons/CaretDown.png";
import guidance from "../../../../public/assets/images/acolhimento/guidance.jpg";
import quotation from "../../../../public/assets/icons/quotation.png";
import joyce from "../../../../public/assets/images/acolhimento/joyce.png";
import juliani from "../../../../public/assets/images/acolhimento/juliani.png";
import adalgisa from "../../../../public/assets/images/acolhimento/adalgisa.png";
import nathalia from "../../../../public/assets/images/acolhimento/nathalia.png";
import regina from "../../../../public/assets/images/acolhimento/regina.png";
import lais from "../../../../public/assets/images/acolhimento/lais.jpeg";

const bannerData = [
  {
    text: "Atendimento Psicológico",
    image: bannerAcolhimento,
  },
];

type Step = {
  number: string;
  title: string;
  description: string;
};

const stepData: Step[] = [
  {
    number: "01",
    title: "Solicitação da Orientação",
    description:
      "A pessoa interessada em receber o acolhimento deve preencher o formulário disponível no site da Rede Autoestima-se. “Orientação” é o nome dado ao primeiro atendimento de 45 minutos.",
  },
  {
    number: "02",
    title: "Deliberação do Atendimento",
    description:
      "Após a triagem inicial realizada pelo nosso Departamento da Assessoria Psicológica, a pessoa que solicitou o atendimento receberá um e-mail com os procedimentos e orientações necessários para iniciar o acompanhamento. O nosso prazo para retorno é de 7 dias!",
  },
  {
    number: "03",
    title: "Preenchimento das Informações Requeridas",
    description:
      "Após enviar as informações solicitadas, o(a) interessado(a) receberá o link via e-mail para acessar a agenda da(o) psicóloga(o) responsável.",
  },
  {
    number: "04",
    title: "Agendamento do Atendimento",
    description:
      "O solicitante escolherá o dia e horário para a sessão, e ambos (solicitante e psicóloga/o) receberão o link da chamada via Google Meet por e-mail logo após a marcação.",
  },
  {
    number: "05",
    title: "Feedback Após o Atendimento",
    description:
      "Após a última sessão, a psicóloga(o) responsável enviará um formulário de feedback que deverá ser preenchido para finalizar o processo de acolhimento.",
  },
];

type Professionals = {
  pic: StaticImport;
  name: string;
  crp: string;
  description1: string;
  description2: string | null;
};

const professionalsData: Professionals[] = [
  {
    pic: joyce,
    name: "Joyce Jordy Penido Burnier",
    crp: "CRP 06/147759",
    description1:
      "Me formei na graduação de Psicologia. Possuo pós-graduação em andamento em Educação Especial Inclusiva e Libras, capacitação em Psicologia Forense e Jurídica em processo de finalização e formação como Terapeuta por Contingências de Reforçamento. Minha orientação teórica é a Análise do Comportamento.",
    description2:
      "Tenho experiência de atuação profissional em atendimento psicológico clínico e educacional. Atendo ao público geralmente na faixa etária a partir de 18 anos. Detenho experiência e/ou preferência em acolher as seguintes demandas: público LGBTQIAP+; forense e jurídica; ansiedade e depressão. Porém estou aberta ao atendimento de diversas demandas.",
  },
  {
    pic: juliani,
    name: "Juliani Nascimento Candido",
    crp: "CRP 02/26810",
    description1:
      "Sou psicóloga, graduada pelo Centro Universitário Brasileiro (UNIBRA). Atuo como psicóloga clínica e Acompanhante Terapêutica. E sou auxiliar de projeto. Escolhi uma clínica mais racializada, como caminho de trabalho, pois busco como exercício ético de minha profissão. Com o auxílio da ACP (Abordagem Centrada na Pessoa) como uma abordagem teórica ofereço uma escuta empática, livre de julgamentos e focada no sujeito.",
    description2:
      "Principais demandas: relacionamento, adaptações, autoconhecimento, início da vida adulta, conflitos familiares e amorosos e ansiedade. Atendimento a mulheres: Adolescentes, jovens e adultos.",
  },
  {
    pic: lais,
    name: "Lais Bianche Leite",
    crp: "CRP 06/161127",
    description1:
      "Bacharel em Psicologia pela USF, pós-graduação em Terapia Cognitivo Comportamental. Tenho como abordagem a TCC. ",
    description2:
      "Atualmente minha principal demanda está em atendimento às pessoas com Transtornos Ansiosos e Estresse. Com isso, venho me especializando com cursos de formação na área. Também tenho atendimentos presenciais de Home Care, mas muito específicos em um caso de demanda especial. Também tenho experiências em Treinamento e Desenvolvimentos de jovens, ministrando palestras na área educacional (crianças do ensino básico) abordando assuntos socioemocionais e também com acolhimentos psicológicos de professores, responsáveis e alunos.",
  },
  {
    pic: regina,
    name: "Regina Leal Teixeira de Melo",
    crp: "CRP 05/69872",
    description1:
      "Possui graduação em Psicologia pela Universidade Veiga de Almeida (2022). Atualmente é psicóloga clínica - Consultório Particular em Botafogo e psicóloga clínica - Aldeias Infantis SOS Brasil. Tem experiência na área de Psicologia, com ênfase em Psicanálise e atendimento a casos de vulnerabilidade extrema.",
    description2: "",
  },
  {
    pic: adalgisa,
    name: "Adalgisa Maria Silva",
    crp: "CRP 04/69138",
    description1:
      "Sou psicóloga, pós-graduada em Psicologia Clínica, Avaliação Psicológica e Psicodiagnóstico, e atualmente me especializando em Neuropsicologia e Terapia Cognitivo-Comportamental (TCC). Além disso, tenho formações em Transtornos Psicóticos, Transtornos de Personalidade, Urgências Psiquiátricas, TEA, Psicomotricidade para Crianças com Síndrome de Down e sou Socorrista em Saúde Mental.",
    description2:
      "Acolhimento, escuta ativa e compromisso com o bem-estar emocional. Meu propósito é ajudar pessoas a se reconectarem consigo mesmas, encontrando equilíbrio e qualidade de vida.",
  },
  {
    pic: nathalia,
    name: "Nathália de Figueiredo Ferreira",
    crp: "CRP 13/11066",
    description1:
      "Sou psicóloga clínica, formada pela Universidade Federal de Campina Grande- PB. Pós-graduanda em Saúde Mental e Atenção Psicossocial pela Faveni. Atualmente estou membro do comitê de ética - COE, do Conselho Regional de Psicologia - CRP 13.",
    description2:
      "Na minha trajetória acadêmica e profissional, caminho atravessada pela ética teórico-prática da psicanálise, das psicologias sociais e comunitárias. E nesse percurso, debrucei-me sobre as questões de gênero, saúde e sexualidade. Atualmente tenho investido na clínica social com crianças típicas e  atípicas.",
  },
];

const Acolhimento = () => {
  return (
    <div className={styles.pageWrapper}>
      <Banner
        title={bannerData[0].text}
        image={bannerData[0].image}
        className={styles.banner}
      />

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.pageDescription}>
        <div className={styles.paragraphs}>
          <p>
            Nossos atendimentos são realizados de forma online, proporcionando
            acolhimento e suporte psicológico para jovens e mulheres de todo o
            Brasil. Os atendimentos seguem o modelo de psicoterapia breve focal,
            com duração de <strong>12 sessões de 45 minutos</strong>, conduzidas
            por profissionais qualificados.
          </p>
          <p>
            Além das sessões individuais, oferecemos grupos de acolhimento
            mediado por psicólogos, criando um espaço seguro para diálogo e
            cuidado emocional.
          </p>
          <p>
            As sessões acontecem semanalmente e são realizadas individualmente.
            Todos os nossos atendimentos são direcionados pelas orientações do{" "}
            {""}
            <Link href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf#:~:text=XIII%20Plen%C3%A1rio%20do%20Conselho%20Federal%20de%20%EE%80%80Psicologia%EE%80%81">
              Código de Ética da Profissão da Psicologia
            </Link>{" "}
            e pelo nosso {""}
            <strong>Protocolo de Atendimento psicológico.</strong>
          </p>
        </div>
        <Button
          href="https://bit.ly/ProtocolodeAtendimentoPsicologicoRedeAutoestimase"
          label="Acesse o nosso protocolo"
        />
        <p>
          Nosso objetivo é garantir que cada pessoa atendida receba suporte
          personalizado, respeitando suas necessidades e vivências, sempre com
          um olhar sensível para questões sociais, raciais e emocionais.
        </p>
      </section>

      <section className={styles.acolhimento}>
        <div className={styles.acolhimentoImageContainer}>
          <Image
            src={acolhimento}
            alt="Imagem referente ao título 'Acolhimento na Rede Autoestima-se'"
            className={styles.acolhimentoImage}
          />
        </div>
        <div className={styles.acolhimentoContent}>
          <h1>Acolhimento na Rede Autoestima-se</h1>
          <div className={styles.steps}>
            {stepData.map((step, index) => (
              <div key={index} className={styles.stepElement}>
                <h2 className={styles.elementNumber}>{step.number}</h2>
                <h3 className={styles.elementTitle}>{step.title}</h3>
                <p className={styles.elementDesc}>{step.description}</p>
              </div>
            ))}

            <div className={styles.stepsFooter}>
              <p>
                Jovens com menos de 18 anos, encaminharemos um termo de ciência
                aos responsáveis através do e-mail informado no formulário de
                solicitação.
              </p>
            </div>
          </div>
          <div className={styles.acolhimentoRequest}>
            <h1>Para solicitar o acolhimento emocional</h1>
            <Button
              label={"Clique aqui"}
              icon={carretDown}
              className={styles.requestButton}
              dropdownOptions={[
                {
                  label: "Ativistas",
                  href: "https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se",
                },
                {
                  label: "Público geral",
                  href: "https://bit.ly/solicitarAtendimentoPsicologicoAutoestimase",
                },
              ]}
            />
            <div className={styles.requestContent}>
              <p>
                Em casos que requerem atendimento presencial, contamos com
                parcerias estratégicas com CAPS (Centros de Atenção
                Psicossocial) e clínicas particulares para realizar a
                transferência adequada dos pacientes, garantindo a continuidade
                e qualidade do cuidado.
              </p>
              <p>
                Não oferecemos acolhimento psicológico em situações de urgência
                e emergência. Caso precise de apoio imediato, procure
                atendimento em um hospital mais próximo.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.acolhimentoGuide}>
          <Image
            src={guidance}
            alt="Imagem relativa a Orientação para pais e responsáveis"
            className={styles.guideImage}
          />

          <div className={styles.guideContainer}>
            <div className={styles.containerContent}>
              <h1>Orientação para Pais e Responsáveis</h1>
              <div className={styles.contentP}>
                <p>
                  Pais e responsáveis podem receber um encontro de orientação
                  psicológica com profissionais da Rede Autoestima-se.
                </p>
                <p>
                  A orientação tem duração de 45 minutos e segue as mesmas
                  etapas técnicas do acolhimento de psicoterapia e poderá ser
                  realizada via ligação telefônica ou chamada de vídeo.
                </p>
              </div>
              <Button
                href="https://bit.ly/SolicitaratendimentoPaiseResponsáveis"
                label="Solicitar orientação"
                className="guideButton"
              />
              <p className={styles.lastP}>
                Em caso de dúvidas ou sugestões você pode entrar em contato com
                o e-mail:{" "}
                <Link
                  href={`mailto: assessoriapsicologica@redeautoestimase.com`}
                  className={styles.pLink}
                >
                  assessoriapsicologica@redeautoestimase.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.acolhimentoDepoimentos}>
          <div className={styles.depoimentosHeader}>
            <div>RELATOS</div>
            <h1>Depoimentos</h1>
          </div>
          <p>
            Confira os relatos transformadores de quem já vivenciou o cuidado e
            acolhimento da Rede Autoestima-se e descubra como o acesso à saúde
            emocional fez a diferença em suas vidas.
          </p>
          <div className={styles.depoimentosGrid}>
            <div className={styles.gridElement}>
              <Image src={quotation} alt="Quotation icon" />
              <p>
                As conversas com a Joyce foram incríveis, e eu sempre me senti
                muito bem antes, durante e depois das consultas. Eu conseguia
                respirar sem tanto esforço e acessei lugares importantes em mim
                que eu não compreendia ou tinha dimensão do impacto que tinha na
                minha vida. (M.H)”
              </p>
            </div>
            <div className={styles.gridElement}>
              <Image src={quotation} alt="Quotation icon" />
              <p>
                Estou bem melhor,mais motivo me fez enxergar a vida de outro
                modo e enxergar novas oportunidades. (R.S)”
              </p>
            </div>
            <div className={styles.gridElement}>
              <Image src={quotation} alt="Quotation icon" />
              <p>
                Consegui aprender técnicas de relaxamento para minha ansiedade e
                estou me sentindo melhor. (N.C)”
              </p>
            </div>
            <div className={styles.gridElement}>
              <Image src={quotation} alt="Quotation icon" />
              <p>
                Me sinto mais leve, que realmente tem alguém que me ouve e está
                aqui para me ajudar, estou começando a compreender que meus
                problemas tem soluções e que não preciso lidar sozinha e que
                posso caminhar no meu tempo. Estou muito grata por esses
                atendimentos com a Laís. (Y.A)”
              </p>
            </div>
          </div>
          <p>
            *Preservamos a identificação das pessoas conforme as orientações do
            Conselho Federal de Psicologia.
          </p>
        </div>
      </section>
      <section className={styles.professionals}>
        <div className={styles.professionalsHeader}>
          <div>PROFISSIONAIS</div>
          <h1>Equipe Terapêutica</h1>
        </div>
        <div className={styles.professionalsHeaderContent}>
          <p>
            Este espaço é dedicado aos(às) psicólogos(as) voluntários(as) e
            parceiros(as) da Rede Autoestima-se, que desempenham um papel
            fundamental na nossa missão de democratizar o acesso ao atendimento
            psicológico. 
          </p>
          <p>
            Aqui, destacamos o trabalho desses profissionais por meio de
            mini-bios e compartilhamento de suas redes sociais, oferecendo
            visibilidade e fortalecendo parcerias. 
          </p>
          <p>
            Essa iniciativa reflete nosso compromisso em valorizar e promover o
            trabalho dos(as) psicólogos(as) no Brasil.
          </p>
        </div>
        <div className={styles.professionalsCards}>
          {professionalsData.map((prof, index) => (
            <div key={index} className={styles.profCard}>
              <div className={styles.profInfo}>
                <Image
                  src={prof.pic}
                  alt={`${prof.name} picture`}
                  width={120}
                  height={120}
                  className={styles.profPic}
                />
                <div className={styles.infoCredentials}>
                  <h2 className={styles.infoName}>{prof.name}</h2>
                  <p className={styles.infoCrp}>{prof.crp}</p>
                </div>
              </div>
              <div className={styles.profDesc}>
                <p>{prof.description1}</p>
                <p>{prof.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.impact}>
        <div className={styles.impactHeader}>
          <div>IMPACTO</div>
          <h1>A Importância dos(as) Psicólogos(as) na Rede Autoestima-se</h1>
        </div>
        <div className={styles.impactContent}>
          <p>
            Em um país onde o acesso à saúde mental ainda é limitado para muitas
            comunidades, o trabalho desses(as) psicólogos(as) representa um
            alívio e uma oportunidade de transformação para aqueles(as) que mais
            precisam.
          </p>
          <p>
            Eles(as) oferecem não apenas suporte técnico e clínico, mas também
            empatia, acolhimento e compreensão, criando um ambiente seguro e
            confiável para o desenvolvimento pessoal e o bem-estar dos
            nossos(as) beneficiários(as).
          </p>
          <p>
            Além disso, a atuação desses(as) profissionais fortalece a nossa
            rede, permitindo que continuemos a expandir nossos serviços e
            alcançar cada vez mais pessoas.
          </p>
          <p>
            A divulgação de suas mini-bios e redes sociais em nosso site é uma
            maneira de reconhecer e valorizar a contribuição desses(as)
            psicólogos(as), ao mesmo tempo em que promove o intercâmbio de
            conhecimento e a criação de novas parcerias.
          </p>
          <p>
            Por meio do comprometimento dos(as) psicólogos(as) voluntários(as) e
            parceiros(as), a Rede Autoestima-se se consolida como um espaço de
            transformação e acolhimento, impactando positivamente a vida de
            diversas comunidades em todo o Brasil.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Acolhimento;
