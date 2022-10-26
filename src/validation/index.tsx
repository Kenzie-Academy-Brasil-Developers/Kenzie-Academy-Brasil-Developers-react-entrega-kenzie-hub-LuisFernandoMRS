import * as yup from "yup";
export const formLoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
});

export const formRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .max(24, "Maximo de 24 caracteres")
    .required("Nome obrigatorio"),
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confimação de senha igual a senha"),
  contact: yup.string().required("Forma de contato obrigatorio"),
  bio: yup.string().required("Bio obrigatoria"),
  course_module: yup.string().required("Selecione um módulo"),
});

export const formTechSchema = yup.object().shape({
  title: yup.string().required("Nome da tecnologia obrigatorio"),
  status: yup.string().required("Nivel obrigatorio"),
});
