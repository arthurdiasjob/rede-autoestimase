import Image, { StaticImageData } from 'next/image'
import styles from "./styles.module.scss";
import MediaQuery from 'react-responsive';

type SponsorLogo = {
  logo: StaticImageData;
}

type SponsorsProps = {
  doadoresLogos1: SponsorLogo[];
  doadoresLogos2: SponsorLogo[];
  org: StaticImageData;
  orgMobile: StaticImageData;
  Button: React.FC<{ label: string }>;
}

const Sponsors = ({doadoresLogos1, doadoresLogos2, org, orgMobile, Button}: SponsorsProps) => {
  return (
    <div className={styles.doadoresTop}>
      <div className={styles.doadoresHeader}>
        <div>FAZEM A DIFERENÇA</div>
        <h1>Doadores</h1>
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.topLogos}>
          {doadoresLogos1.map((item, index) => (
            <Image key={index} src={item.logo} alt="Logo"/>
          ))}
        </div>
        <div className={styles.bottomLogos}>
          {doadoresLogos2.map((item, index) => (
            <Image key={index} src={item.logo} alt="Logo" />
          ))}
        </div>
        <MediaQuery maxWidth={1366}>
          <div className={styles.org}>
            <Image
              src={orgMobile}
              alt="Logo indicando que fazemos parte do Mapa das Organizações da Sociedade Civil"
            />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={1366}>
          <div className={styles.org}>
            <Image
              src={org}
              alt="Logo indicando que fazemos parte do Mapa das Organizações da Sociedade Civil"
            />
          </div>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={768}>
        <Button label="Seja Nosso parceiro" />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <Button label="Conheça nossa lista de apoiadores" />
      </MediaQuery>
    </div>
  )
}

export default Sponsors