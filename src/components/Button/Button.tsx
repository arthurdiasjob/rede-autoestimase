"use client";

import Link from "next/link";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { StaticImageData } from "next/image";
import { useState } from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: StaticImageData;
  alt?: string;
  className?: string;
  classMenu?: string;
  classItem?: string;
  dropdownOptions?: { label: string; href: string }[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  icon,
  alt = "Ícone do botão",
  className,
  classMenu,
  classItem,
  dropdownOptions,
  type = "button",
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const content = (
    <>
      {icon && <Image src={icon} alt={alt} width={24} height={24} />}
      <span>{label}</span>
    </>
  );

  if (dropdownOptions && dropdownOptions.length > 0) {
    return (
      <div className={styles.dropdownContainer}>
        <button
          type="button"
          className={`${styles.button} ${className || ""}`}
          onClick={toggleDropdown}
          {...rest}
        >
          {content}
        </button>
        {isOpen && (
          <div className={`${styles.dropdownMenu} ${classMenu}`}>
            {dropdownOptions.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className={`${styles.dropdownItem} ${classItem}`}
              >
                {option.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className || ""}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
