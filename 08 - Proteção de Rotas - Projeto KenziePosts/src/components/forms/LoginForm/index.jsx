import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const onSubmit = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

      <button className="btn outline" type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>
      <Link className="link" to="/register" disabled={loading}>
        Cadastre-se
      </Link>
    </form>
  );
};
