import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        error={errors.name}
        {...register("name")}
        disabled={loading}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        error={errors.email}
        {...register("email")}
        disabled={loading}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
        disabled={loading}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
        disabled={loading}
      />

      <button type="submit" className="btn outline" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
      <Link className="link" to="/">
        Voltar
      </Link>
    </form>
  );
};
