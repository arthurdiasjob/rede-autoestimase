import "material-symbols";
import * as motion from "motion/react-client";

import styles from "./styles.module.scss";
import Link from "next/link";

type CardNewsProps = {
  title: string;
  year: string;
  href: string;
};

const CardNews: React.FC<CardNewsProps> = ({
  title,
  year,
  href,
}: CardNewsProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      whileTap={{ scale: 0.95 }}
      className={styles.cardWrapper}
    >
      <Link href={href}>
        <div className={styles.titleWrapper}>
          <h3>
            {title} <span>{year}</span>
          </h3>
        </div>

        <div className={styles.readMore}>
          <h3>Leia na íntegra</h3>
          <span className="material-symbols-outlined">arrow_circle_right</span>
        </div>
      </Link>
    </motion.div>
  );
};
export default CardNews;
