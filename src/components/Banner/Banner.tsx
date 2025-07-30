import Image from "next/image";
import styles from "./styles.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

type BannerProps = {
  className?: string;
  title: string;
  image: StaticImport | string;
  alt?: string;
};

const Banner: React.FC<BannerProps> = ({ className, title, image, alt }) => {
  return (
    <div className={`${styles.bannerWrapper} ${className}`}>
      <h1 className={styles.bannerTitle}>{title}</h1>

      <Image
        className={styles.bannerImage}
        src={image}
        width={1920}
        quality={100}
        alt={alt || "Banner image"}
        priority
      />
    </div>
  );
};

export default Banner;
