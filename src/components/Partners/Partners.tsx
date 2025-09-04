import { Doadores } from "@/app/page";
import styles from "./styles.module.scss";
import Image from "next/image";
import MediaQuery from "react-responsive";

type PartnersProps = {
  partnersLogo: Doadores[];
}

const Partners = ({ partnersLogo }: PartnersProps) => {
  return (
    <div className={styles.doadoresBottom}>
      <MediaQuery maxWidth={768}>
        <div className={styles.doadoresHeader}>
          <h1>Parceiros estratégicos</h1>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <div className={styles.doadoresHeader}>
          <h1>Parceiros</h1>
        </div>
      </MediaQuery>
      <div className={styles.partLogos}>
        {partnersLogo.map((item, index) => (
          <Image key={index} src={item.logo} alt="Logo" />
        ))}
      </div>
    </div>
  )
}

export default Partners