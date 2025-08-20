import { Doadores } from "@/app/page";
import styles from "./styles.module.scss";
import Image from "next/image";

type PartnersProps = {
  partnersLogo: Doadores[];
}

const Partners = ({ partnersLogo }: PartnersProps) => {
  return (
    <div className={styles.doadoresBottom}>
      <div className={styles.doadoresHeader}>
        <h1>Parceiros</h1>
      </div>
      <div className={styles.partLogos}>
        {partnersLogo.map((item, index) => (
          <Image key={index} src={item.logo} alt="Logo" />
        ))}
      </div>
    </div>
  )
}

export default Partners