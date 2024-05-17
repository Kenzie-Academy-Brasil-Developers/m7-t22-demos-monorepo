import styles from "./style.module.scss";
import { TextArea } from "../TextArea";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ScrapContext } from "../../../providers/ScrapContext";

export const CreateScrapForm = () => {
  const { register, handleSubmit } = useForm();
  const { createScrap } = useContext(ScrapContext);

  const submit = (formData) => {
    // FUNÇÃO DE CRIAÇÃO DO SCRAP
    createScrap(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <TextArea label="Sua mensagem" {...register("content")} />
      <button type="submit" className="btn solid">
        Deixar um scrap
      </button>
    </form>
  );
};
