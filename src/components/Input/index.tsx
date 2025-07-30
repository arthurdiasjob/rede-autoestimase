"use client";

import React from "react";
import { Controller, Control } from "react-hook-form";
import styles from "./styles.module.scss";

type FormData = {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
};

type InputProps = {
  name: keyof FormData;
  control: Control<FormData>;
  label: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  errorMessage,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) =>
            type === "textarea" ? (
              <textarea
                {...field}
                value={field.value ?? ""}
                id={name}
                placeholder={placeholder}
                className={`${styles.input} ${styles.textarea} ${
                  errorMessage ? styles.inputError : ""
                }`}
                rows={3}
              />
            ) : (
              <input
                {...field}
                value={field.value ?? ""}
                id={name}
                type={type}
                placeholder={placeholder}
                className={`${styles.input} ${
                  errorMessage ? styles.inputError : ""
                }`}
              />
            )
          }
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
