"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MediaQuery from 'react-responsive'

//Components and archives
import "./styles.modules.scss";
import Navbar from "../Navbar";
import Button from "../Button/Button";
import Menu from "../Icons/Menu";
import Close from "../Icons/Close";
import MenuMobile from "../MenuMobile/MenuMobile";
import LanguageFlag from "../LanguageFlag/LanguageFlag";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Link href={"/"} className="logo-desktop">
        <Image
          src="/assets/logo/logo-desktop.svg"
          alt="Logo da Rede Autoestima-se"
          width={198}
          height={56}
        />
      </Link>
      <MediaQuery maxWidth={1366}>
        <div className="header-mobile">
          <Link href={"/"} className="logo-mobile">
            <Image
              src="/assets/logo/logo-mobile.svg"
              alt="Logo da Rede Autoestima-se"
              width={44.71}
              height={56.03}
            />
          </Link>
          <Button label={"Doe"} href={"/pages/doe"} className="donate" />
          <div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Close /> : <Menu />}
          </div>
        </div>

      </MediaQuery>
      {isOpen ? <div>
        <MenuMobile toggleMenu={() => setIsOpen(!isOpen)}/>
      </div> : ''}

      <MediaQuery minWidth={1366}>
        <div className="navigation">
          <div className="desktop-nav">
            <Navbar />
          </div>
          <div className="main-buttons">
            <button className="search" aria-label="Pesquisar no site">
              <Image
                src="/assets/icons/lupa.png"
                alt="Imagem de uma lupa indicando um botão de pesquisar no site"
                width={25}
                height={24}
              />
            </button>
            <Button label={"Doe"} href={"/pages/doe"} className="donate" />
          </div>
          <LanguageFlag />
        </div>
      </MediaQuery>
    </header>
  );
};

export default Header;
