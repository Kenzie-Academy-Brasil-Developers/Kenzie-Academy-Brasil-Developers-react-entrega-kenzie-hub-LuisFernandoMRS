import { useForm } from "react-hook-form";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import {
  StyledHeadline,
  StyledNagetive,
  StyledTitleOne,
} from "../../styles/typography";
import {
  Container,
  StyledDiv,
  StyledDivLogoLink,
  StyledLink,
  StyledSelect,
} from "./style";
import LogoHub from "../../assests/LogoHub.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validation";

import { Label } from "../../components/Label";
import { StyledInput } from "../../components/Input/style";
import { ButtonRegister } from "../../components/Button";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";

export interface IRegisterPage {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const RegisterPage = () => {
  const { handleRegister } = useContext(AuthenticationContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPage>({
    resolver: yupResolver(formRegisterSchema),
  });

  return (
    <Main>
      <Container>
        <StyledDivLogoLink>
          <img src={LogoHub} alt="Logo Kenzie Hub" />

          <StyledLink to={"/"}>Voltar</StyledLink>
        </StyledDivLogoLink>
        <StyledDiv>
          <div>
            <StyledTitleOne fontSize={24} color={`${"var(--grey-0)"}`}>
              Crie uma conta
            </StyledTitleOne>
            <StyledHeadline fontSize={12} color={`${"var(--grey-1)"}`}>
              Rapido e grátis, vamos nessa
            </StyledHeadline>
          </div>

          <Form onSubmit={handleSubmit(handleRegister)}>
            <Label htmlFor="name">Nome</Label>
            <StyledInput
              type="text"
              id="name"
              placeholder="digite aqui seu nome"
              {...register("name")}
            />
            <StyledNagetive fontSize={12}>
              {errors.name?.message}
            </StyledNagetive>

            <Label htmlFor="email">Email</Label>
            <StyledInput
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <StyledNagetive fontSize={12}>
              {errors.email?.message}
            </StyledNagetive>

            <Label htmlFor="password">Senha</Label>
            <StyledInput
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <StyledNagetive fontSize={12}>
              {errors.password?.message}
            </StyledNagetive>

            <Label htmlFor="confirm-password">Confirmar senha</Label>
            <StyledInput
              type="password"
              id="confirm-password"
              placeholder="Digite novamente sua senha"
              {...register("confirmpassword")}
            />
            <StyledNagetive fontSize={12}>
              {errors.confirmpassword?.message}
            </StyledNagetive>

            <Label htmlFor="bio">Bio</Label>
            <StyledInput
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <StyledNagetive fontSize={12}>{errors.bio?.message}</StyledNagetive>

            <Label htmlFor="contact">Contato</Label>
            <StyledInput
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <StyledNagetive fontSize={12}>
              {errors.contact?.message}
            </StyledNagetive>

            <Label htmlFor="course_module">Selecionar módulo</Label>
            <StyledSelect id="course_module" {...register("course_module")}>
              <option>Selecione</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value=" Segundo Módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </StyledSelect>
            <StyledHeadline fontSize={12}>
              {errors.course_module?.message}
            </StyledHeadline>

            <ButtonRegister type="submit">Cadastrar</ButtonRegister>
          </Form>
        </StyledDiv>
      </Container>
    </Main>
  );
};
