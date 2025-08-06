import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

// Components
import EmailDisplay from "../EmailDisplay/EmailDisplay";
import SocialMediaList from "../SocialMediaList/SocialMedia";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <SocialMediaList />
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Índice</h3>
          <p>
            <Link href="/" className={styles.footerLink}>
              Início
            </Link>
          </p>
          <p>
            <Link href="/pages/sobre-nos#" className={styles.footerLink}>
              Sobre nós
            </Link>
          </p>
          <p>
            <Link href="/pages/acolhimento" className={styles.footerLink}>
              Acolhimento
            </Link>
          </p>
          <p>
            <Link href="#" className={styles.footerLink}>
              Reconhecimentos
            </Link>
          </p>
          <p>
            <Link href="/pages/transparencia" className={styles.footerLink}>
              Transparência
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/adesaos%C3%B3ciodoador"
              className={styles.footerLink}
            >
              Termos de uso
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/LGPDRedeautoestimase"
              className={styles.footerLink}
            >
              Política de Privacidade
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/adesaos%C3%B3ciodoador"
              className={styles.footerLink}
            >
              Termo de Adesão de sócio doador
            </Link>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Contato</h3>
          <EmailDisplay
            email="organizacao@redeautoestimase.com"
            label="E-mail principal:"
          />
          <EmailDisplay
            email="assessoriapsicologica@redeautoestimase.com"
            label="Assessoria Psicológica (Departamento Clínico):"
          />
          <EmailDisplay
            email="comercialsocial@redeautoestimase.com"
            label="Departamento do Comercial Social:"
          />
          <EmailDisplay
            email="mobilizacao@redeautoestimase.com"
            label="Parcerias para mobilização e doação de recursos:"
          />
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerNewsletter}>
            <Newsletter />
          </div>
          <div className={styles.footerTimetable}>
            <h3>Nossos Horários</h3>
            <p>Segunda a Sexta: 09:00 até 18:00 (BRT)</p>
            <p>Sábados: 09:00 até 14:00 (BRT)</p>
          </div>
        </div>
      </div>

      <div className={styles.footerLogo}>
        <Image
          src="/assets/logo/logo-white.svg"
          alt="Logo Autoestima-se"
          width={150}
          height={50}
        />
      </div>

      <div className={styles.footer_warning}>
        <p>
          A Rede Autoestima-se não oferece aconselhamento psicológico em
          situações de urgência e emergência. Caso precise de apoio imediato,
          procure atendimento em um hospital ou posto médico próximo.
        </p>
      </div>

      <div className={styles.footer_info}>
        <div className={styles.footer_content_wrapper}>
          <div className={styles.footer_legal}>
            <span>© Todos os direitos reservados à Rede Autoestima-se</span>
            <span>Razão Social: Rede Autoestima-se</span>
            <span>CNPJ: 44.925.343/0001-32</span>
          </div>
          <div className={styles.footer_credits}>
            <span>Design por</span>
            <a href="mailto:gustavo.bastos@gmail.com">Gustavo Bastos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
