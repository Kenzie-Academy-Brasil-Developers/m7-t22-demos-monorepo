import styles from "./styles.module.scss";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Usuário"
        type="text"
        placeholder="Digite seu nome de usuário"
        error={errors.username}
        {...register("username")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button className="btn outline" type="submit">
        Entrar
      </button>
      <Link className="link" to="/register">
        Cadastre-se
      </Link>
    </form>
  );
};
