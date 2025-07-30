"use client";

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

// Components and styles
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import Input from "../Input";
import CustomToast, { showSuccessToast, showErrorToast } from "../CustomToast";
import hapiness from "../../../public/assets/images/felicidade.jpg";
import hapinessMobile from "../../../public/assets/images/felicidade-mobile.jpg";
import envelope from "../../../public/assets/icons/Envelope.png";
import smileyDivider from "../../../public/assets/icons/smileyDivider.svg";

type FormData = {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório.")
    .matches(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras e espaços."),
  email: yup
    .string()
    .email("Formato de e-mail inválido.")
    .required("E-mail é obrigatório."),
  phone: yup
    .string()
    .nullable()
    .notRequired()
    .matches(
      /^[\d\s()+-]*$/,
      "O telefone pode conter apenas números, espaços, +, - e ()."
    ),
  message: yup.string().required("A mensagem não pode estar vazia."),
});

const Forms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    try {
      console.log("Dados enviados:", data);
      showSuccessToast("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      showErrorToast("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div>
      <section className={styles.formWrapper}>
        <h1 className={styles.formH1}>Entre em contato</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="Nome"
            control={control}
            type="text"
            placeholder="Nome Completo"
            errorMessage={errors.name?.message}
          />
          <div className={styles.inputGroup}>
            <Input
              name="email"
              label="E-mail"
              control={control}
              type="email"
              placeholder="E-mail"
              errorMessage={errors.email?.message}
            />
            <Input
              name="phone"
              label="Telefone"
              control={control}
              type="tel"
              placeholder="(99) 99999-9999"
              errorMessage={errors.phone?.message}
            />
          </div>
          <Input
            name="message"
            label="Mensagem"
            control={control}
            type="textarea"
            placeholder="Mensagem"
            errorMessage={errors.message?.message}
          />
          <Button
            label="Enviar"
            alt="Botão de envio do formulário"
            className={styles.submitButton}
            type="submit"
          />
        </form>
        <CustomToast />
      </section>

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.hapinessWrapper}>
        <div className={styles.fullContent}>
          <div className={styles.hapinessImageContainer}>
            <Image
              src={hapiness}
              alt="Imagem relativa ao Programa Felicidade Corporativa"
              className={styles.hapinessImage}
            />
            <Image
              src={hapinessMobile}
              alt="Imagem relativa ao Programa Felicidade Corporativa"
              className={styles.hapinessImageMobile}
            />
            <div className={styles.hapinessImageTitle}>
              <h1>Programa</h1>
              <h1>Felicidade</h1>
              <h1>Corporativa</h1>
            </div>
          </div>

          <div className={styles.content}>
            <p>
              Com a demanda de novas soluções para melhorar o bem-estar dos
              colaboradores, desenvolvemos o Programa Felicidade Corporativa com
              modelo aliado à inovação e responsabilidade social, o ESG.
            </p>
            <ul className={styles.topic}>
              <li>
                Traçamos com à instituição os objetivos com o programa e as
                demandas dos funcionários;
              </li>
              <li>
                Traçamos o perfil dos profissionais que participarão do
                programa;
              </li>
              <li>Montamos o cronograma de ação das atividades;</li>{" "}
              <li>Acompanhamos a empresa na coleta das métricas de impacto.</li>
            </ul>

            <p>O programa pode ser realizado online e/ou presencial! </p>

            <p>
              Sua instituição deseja ter o programa Felicidade Corporativa
              desenhado pela Rede Autoestima-se e com metodologias comprovadas
              cientificamente? 
            </p>

            <p>
              Para solicitar orçamentos e mais detalhes é através do e-mail
              abaixo:
            </p>
            <a
              href={`mailto:"organizacao@redeautoestimase.com"`}
              className={styles.mailTo}
            >
              <Image src={envelope} alt="Ícone de e-mail" />
              <p className={styles.email}>organizacao@redeautoestimase.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forms;
