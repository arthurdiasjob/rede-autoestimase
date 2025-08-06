"use client";

import { useState } from "react";

import styles from "../Newsletter/styles.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Por favor, insira um e-mail válido.");
    } else {
      setMessage(`O e-mail ${email} foi cadastrado com sucesso!`);
      setEmail("");
    }
  };

  return (
    <div className={styles.newsletterContainer}>
      <h3 className={styles.NewsletterTitle}>Newsletter</h3>
      <p className={styles.newsletterText}>
        Mantenha sua saúde mental e bem-estar abastecidos de boas notícias.
        Inscreva-se na nossa newsletter.
      </p>
      <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.newsletterInput}
        />
        <button type="submit" className={styles.newsletterButton}>
          <img src="/assets/icons/send.svg" alt="/" />
        </button>
      </form>
      {message && <p className={styles.newsletterMessage}>{message}</p>}
    </div>
  );
};

export default Newsletter;
