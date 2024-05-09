import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { api } from "../../../services/api";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    userLogin(formData);
  };

  const userLogin = async (formData) => {
    // https://scrap-fake-api.onrender.com/login
    // { email: email, name: name, password: password }

    try {
      const response = await api.post("/login", formData);
      console.log(response.data);
      console.log("Login bem sucedido");
    } catch (error) {
      console.log("ERRO NO LOGIN");
      console.log(error.response.data);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

      <button className="btn outline" type="submit">
        Entrar
      </button>
      <Link className="link" to="/register">
        Cadastre-se
      </Link>
    </form>
  );
};
