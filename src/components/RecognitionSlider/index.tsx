
import React, { useCallback, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { SlArrowRight , SlArrowLeft } from 'react-icons/sl';
import styles from './styles.module.scss';

interface RecognitionSliderProps {
  reconContent: {
    icon: StaticImageData;
    subject: string;
  }[];
}

const RecognitionSlider: React.FC<RecognitionSliderProps> = ({ reconContent }) => {
  const [current, setCurrent] = useState(0);

  const handleSlide = useCallback((direction: "left" | "right", total: number) => {
    
    if (direction === "left") {
      if (current > 0) {
        setCurrent(current - 1);
      }
      document.querySelector(`.${styles.conquistasCardElement}`)?.classList.add(styles.animationCard);
      setTimeout(() => {
        document.querySelector(`.${styles.conquistasCardElement}`)?.classList.remove(styles.animationCard);
      }, 500);
    } else {
      if (current < total - 1) {
        setCurrent(current + 1);
      }
      document.querySelector(`.${styles.conquistasCardElement}`)?.classList.add(styles.animationCard2);
      setTimeout(() => {
        document.querySelector(`.${styles.conquistasCardElement}`)?.classList.remove(styles.animationCard2);
      }, 500);
    }
  }, [current]);


  return (
    <div className={styles.conquistasCardContainer}>
      <button
        onClick={() => handleSlide('left', reconContent.length)}
        className={styles.navButton}
        disabled={current === 0}
      >
        <SlArrowLeft size={40} fill='#fff'/>
      </button>
      <div className={styles.conquistasCardElement}>
        <Image src={reconContent[current].icon} alt="Logo da matéria" />
        <p>{reconContent[current].subject}</p>
      </div>
      <button
        onClick={() => handleSlide("right", reconContent.length)}
        className={styles.navButton}
        disabled={current === reconContent.length - 1}
      >
        <SlArrowRight size={40} fill='#fff'/>
      </button>
    </div>
  );
};

export default RecognitionSlider;
