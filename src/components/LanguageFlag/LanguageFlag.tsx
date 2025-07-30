import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.modules.scss";
import MediaQuery from "react-responsive";

type Language = {
  code: string;
  name: string;
  image: string;
  alt: string;
};

const LanguageFlag = () => {
  // TODO: Implementar a lógica de troca de idioma e exibir imagem da bandeira correspondente no mobile
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: "pt",
    name: "Português",
    image: "/assets/flags/brasil-flag.svg",
    alt: "Bandeira do Brasil indicando que o site está na língua portuguesa",
  });

  const languages: Language[] = [
    {
      code: "pt",
      name: "Português",
      image: "/assets/flags/brasil-flag.svg",
      alt: "Bandeira do Brasil indicando que o site está na língua portuguesa",
    },
    {
      code: "es",
      name: "Espanhol",
      image: "/assets/flags/mexico-flag.svg",
      alt: "Bandeira do México indicando que o site está na língua espanhola",
    },
    {
      code: "en",
      name: "Inglês",
      image: "/assets/flags/usa-flag.svg",
      alt: "Bandeira dos EUA indicando que o site está na língua inglesa",
    },
  ];

  const toggleLanguages = (): void => {
    setShowLanguages((prev) => !prev);
  };

  const handleLanguageChange = (language: Language): void => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };
  
  return (
    <div className="languages">
      <MediaQuery minWidth={1224}>
        <button
          aria-label={`Selecionar idioma: ${selectedLanguage.name}`}
          className="flag-toggle"
          onClick={toggleLanguages}
        >
          <Image
            src={selectedLanguage.image}
            alt={selectedLanguage.alt}
            width={29.6}
            height={19.2}
          />
            <IoIosArrowDown className="arrow-icon" />
        </button>
        {showLanguages && (
          <div className="language-options">
            {languages
              .filter((lang) => lang.code !== selectedLanguage.code)
              .map((lang) => (
                <button
                  key={lang.code}
                  aria-label={`Escolher site em língua ${lang.name}`}
                  className="flag"
                  onClick={() => handleLanguageChange(lang)}
                >
                  <Image
                    src={lang.image}
                    alt={lang.alt}
                    width={29.6}
                    height={19.2}
                  />
                </button>
              ))}
          </div>
        )}
      </MediaQuery>

      <MediaQuery maxWidth={1224}>
        {languages.map((lang) => (
          <button
            aria-label={`Selecionar idioma: ${lang.name}`}
            className="flag-toggle--mobile"
            onClick={toggleLanguages}
            key={lang.code}
          >
            <Image
              src={lang.image}
              alt={lang.alt}
              width={29.6}
              height={19.2}
            />
          </button>
        ))}
      </MediaQuery>
  </div>
  )
}

export default LanguageFlag