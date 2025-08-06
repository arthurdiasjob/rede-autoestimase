"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.modules.scss";
import { useRouter } from "next/navigation";

interface Page {
  name: string;
  path: string;
  children?: Page[];
}

type NavbarProps = {
  handleCloseMenus?: () => void;
};

const pages: Page[] = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Sobre nós",
    path: "/pages/sobre-nos",
  },
  {
    name: "O que fazemos",
    path: "/pages/o-que-fazemos",
    children: [
      { name: "Como fazemos", path: "/pages/o-que-fazemos/como-fazemos" },
      { name: "Empresas", path: "/pages/o-que-fazemos/empresas" },
      {
        name: "Instituições de Ensino",
        path: "/pages/o-que-fazemos/instituicoes-de-ensino",
      },
      { name: "Voluntariado", path: "/pages/o-que-fazemos/voluntariado" },
    ],
  },
  {
    name: "Psicoterapia",
    path: "/pages/acolhimento",
  },
  {
    name: "Iniciativas",
    path: "/pages/iniciativas",
    children: [
      {
        name: "Atendimento para ativistas",
        path: "/pages/iniciativas/atendimento-para-ativistas",
      },
      {
        name: "Fundo AutoViver",
        path: "/pages/iniciativas/fundo-autoviver",
      },
      {
        name: "Saúde mental na Amazônia",
        path: "/pages/iniciativas/saude-mental-na-amazonia",
      },
      {
        name: "Vozes do Bem-Estar",
        path: "/pages/iniciativas/vozes-do-bem-estar",
      },
    ],
  },
  {
    name: "Transparência",
    path: "/pages/transparencia",
  },
];

const NavbarMobile = ({ handleCloseMenus }: NavbarProps) => {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState('');
  const router = useRouter();

  const clickLink = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    if (handleCloseMenus && !page.children) {
      setMenuActive('');
      handleCloseMenus();
      router.push(page.path);
    } 
    if (menuActive === page.name && !!page.children) {
      setMenuActive('');
      e.preventDefault();
    } else {
      e.preventDefault();
      setMenuActive(page.name);
    }
  };

  const isActive = (path: string, pageName: string) => {
    return (pathname === path || pageName === menuActive);
  };

  return (
    <nav className="navbar-mobile">
      {pages.map((page, index) => {
        return (
          <div key={index} className="menu-item">
            <Link
              href={page.path}
              className={`link ${isActive(page.path, page.name) ? "active" : ""}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => clickLink(e, page)}
            >
              {page.name}
              {page.children && <IoIosArrowDown className="arrowDown" />}
            </Link>
            {page.children && (
              <div className={`submenu ${menuActive === page.name ? "submenu--active" : ""}`}>
                {page.children.map((child, childIndex) => {
                  const isChildActive = pathname.startsWith(child.path) && menuActive !== '';

                  return (
                    <Link
                      href={child.path}
                      key={childIndex}
                      onClick={handleCloseMenus}
                      className={`submenu-link ${
                        isChildActive ? "active" : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavbarMobile;
