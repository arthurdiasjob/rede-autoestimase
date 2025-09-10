 "use client";

import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";

type ModalContextType = {
  onClose: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a Modal");
  }
  return context;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (!disableEscapeKeyDown && event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose, disableEscapeKeyDown]);

  const handleBackdropClick = useCallback(() => {
    if (!disableBackdropClick) {
      onClose();
    }
  }, [disableBackdropClick, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Header = ({
  children,
  hideCloseButton = false,
}: {
  children: ReactNode;
  hideCloseButton?: boolean;
}) => {
  return (
    <div className={styles.modalHeader}>
      <h2 className={styles.modalTitle}>{children}</h2>
      {!hideCloseButton && <CloseButton />}
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.modalFooter}>{children}</div>;
};

const CloseButton = () => {
  const { onClose } = useModalContext();
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <X size={24} />
    </button>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.CloseButton = CloseButton;

export default Modal;