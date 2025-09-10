"use client";

import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal"
import Button from "../Button/Button";
import styles from "./styles.module.scss";

const COOKIE_CONSENT_KEY = "cookie_consent_given";

const CookieConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // A verificação do localStorage só pode acontecer no lado do cliente.
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentGiven) {
      setIsOpen(true);
    }
  }, []);

  const handleAction = (consent: "true" | "false") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}} // Passamos uma função vazia pois o fechamento é controlado pelos botões
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <Modal.Header hideCloseButton={true}>Valorizamos sua privacidade</Modal.Header>
      <Modal.Body>
        <p>
          Nosso site usa cookies para melhorar a navegação. Sem eles você ainda poderá navegar, mas algumas funcionalidades não estarão disponíveis. Leia nossa Política de privacidade.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className={styles.cookieFooter}>
          <Button
            onClick={() => handleAction("false")}
            label="Cancelar"
            className={styles.confirmButton}
          />
          <Button className={styles.cancelButton} onClick={() => handleAction("true")} label="Aceitar" />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieConsentModal;