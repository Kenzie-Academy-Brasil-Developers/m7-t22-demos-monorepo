import styles from "./styles.module.css";
import { Input } from "../Input";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log(event);
  };

  // console.log(register());
  // console.log(handleSubmit(onSubmit));

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Usuário"
        type="text"
        placeholder="Digite seu nome de usuário"
        required
        {...register("username")}
      />

      <Input
        label="Numero Favorito"
        type="number"
        placeholder="Digite seu numero favorito entre 1 e 100"
        min="1"
        max="100"
        required
        {...register("favNumber")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        required
        {...register("email")}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        required
        {...register("password")}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        required
        {...register("confirmPassword")}
      />

      <button type="submit">Criar conta</button>
    </form>
  );
};

// V1
// export const RegisterForm = () => {
//   return (
//     <form className={styles.registerForm}>
//       <div className={styles.inputBox}>
//         <label htmlFor="username">Usuario</label>
//         <input
//           name="username"
//           type="text"
//           placeholder="Digite seu nome de usuario"
//         />
//       </div>

//       <div className={styles.inputBox}>
//         <label htmlFor="favNumber">Numero Favorito</label>
//         <input
//           name="favNumber"
//           type="number"
//           placeholder="Digite seu numero favorito entre 1 e 100"
//           min="1"
//           max="100"
//         />
//       </div>

//       <div className={styles.inputBox}>
//         <label htmlFor="email">Email</label>
//         <input name="email" type="email" placeholder="Digite seu email" />
//       </div>

//       <div className={styles.inputBox}>
//         <label htmlFor="password">Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Digite seu password"
//         />
//       </div>

//       <button type="submit">Criar conta</button>
//     </form>
//   );
// };
