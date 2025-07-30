import React from "react";
import styles from "./SocialMediaList.module.scss";
import Image from "next/image";

const SocialMediaList = () => { 
  const socialMedia = [
    { name: "WhatsApp", icon: "/assets/icons/social/whatsapp.svg", href: "https://wa.me/557582133430" },
    { name: "Instagram", icon: "/assets/icons/social/instagram.svg", href: "https://www.instagram.com/redeautoestima_se/" },
    { name: "Facebook", icon: "/assets/icons/social/facebook.svg", href: "https://www.facebook.com/redeautoestimase/" },
    { name: "LinkedIn", icon: "/assets/icons/social/linkedin.svg", href: "https://www.linkedin.com/company/redeautoestima-se/" },  
    { name: "YouTube", icon: "/assets/icons/social/youtube.svg", href: "https://www.youtube.com/channel/UCEQN7ch5R2Lo7KmEASoiJeg" },
   
  ];

  return (
    <div className={styles.socialMediaContainer}>
      <ul className={styles.socialMediaList}>
        {socialMedia.map((item, index) =>(
          <li key={index} className={styles.socialMediaItem}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                src={item.icon}
                alt={item.name}
                width={60}
                height={60}
                className={styles.socialMediaIcon}
                />
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaList;
