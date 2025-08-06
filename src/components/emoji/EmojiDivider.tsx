"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function EmojiDivider() {
  return (
    <div className={styles.emojiDivider}>
      <Image
        src="/assets/icons/smilev2.png"
        alt="Emoji de separação"
        width={40}
        height={40}
      />
    </div>
  );
}
