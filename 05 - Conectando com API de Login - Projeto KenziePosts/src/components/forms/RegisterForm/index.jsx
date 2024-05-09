// import styles from "./styles.module.scss";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import { InputPassword } from "../InputPassword";
import { useState } from "react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    userRegister(formData);
  };

  const userRegister = async ({ email, name, password }) => {
    // https://scrap-fake-api.onrender.com/users
    // { email: email, name: name, password: password }

    try {
      setLoading(true);
      const response = await api.post("/users", { email, name, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <button type="submit" className="btn outline" disabled={loading}>
        {loading ? "Cadastrando" : "Cadastrar"}
      </button>
      <Link className="link" to="/">
        Voltar
      </Link>
    </form>
  );
};
