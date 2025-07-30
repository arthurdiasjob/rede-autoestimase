"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

//Components and archives
import styles from "./styles.module.scss";

type CardProps = {
  title: string;
  icon: StaticImageData;
  backgroundImage: StaticImageData;
  hoverText?: string;
  heightClassName?: string;
  widthClassName?: string;
};

const CardService: React.FC<CardProps> = ({
  title,
  icon,
  backgroundImage,
  hoverText,
  heightClassName = "",
  widthClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${styles.card} ${heightClassName} ${widthClassName}? ${styles.widthClassName}`}
      onMouseEnter={() => hoverText && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className={styles.backgroundImage}
        priority={true}
      />

      <motion.div
        className={styles.content}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isHovered ? 0 : 0.3,
        }}
      >
        <Image src={icon} alt={title} className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </motion.div>

      <motion.div
        className={styles.hoverText}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isHovered ? 0.3 : 0,
        }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
};

export default CardService;
