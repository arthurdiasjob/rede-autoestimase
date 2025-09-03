import "./styles.modules.scss";
import Link from 'next/link';
import Image from 'next/image';
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import NavbarMobile from "../NavbarMobile";
import Button from "../Button/Button";

interface MenuMobileProps {
  toggleMenu: () => void;
}

const MenuMobile = ({ toggleMenu }: MenuMobileProps) => {

  return (
    <div className="menu-mobile">
      <div className="menu-header">
        <Link href={"/"} className="logo-mobile">
          <Image
            src="/assets/logo/logo-desktop.svg"
            alt="Logo da Rede Autoestima-se"
            width={198}
            height={56}
          />
        </Link>
      </div>
      <div className="menu-content">
        <LanguageFlag />
        <NavbarMobile handleCloseMenus={toggleMenu}/>
      </div>
      <div className="wrapper-donate-button">
        <Button label={"Doe Agora"} href={"/pages/doe"} className="donate" />
      </div>
    </div>
  );
};

export default MenuMobile;