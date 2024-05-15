import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(1, "Esse campo é obrigatório"),
    email: z
      .string()
      .min(1, "Esse campo é obrigatório")
      .email("Forneça um email válido"),
    password: z
      .string()
      .min(8, "São necessários no mínimo 8 caracteres.")
      .regex(/[a-z]+/, "É necessário pelo menos um caracter minúsculo")
      .regex(/[A-Z]+/, "É necessário pelo menos um caracter maiúsculo")
      .regex(/[0-9]+/, "É necessário pelo menos um caracter numérico")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~-]+/,
        "É necessário pelo menos um caracter especial"
      ),
    confirmPassword: z.string().min(1, "Esse campo é obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

/*
  Expressoes Regulares (REGEX):
  - São formar de validar uma string pelo formato especificado.
*/
