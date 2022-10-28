import { useContext } from "react";
import {
  AuthenticationContext,
  IUserLogin,
} from "../../contexts/UserContext/AuthContext";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import {
  StyledHeadline,
  StyledNagetive,
  StyledTitleOne,
} from "../../styles/typography";
import { Container, StyledDiv, StyledDivLinkMsg, StyledLink } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validation";

import LogoHub from "../../assests/LogoHub.svg";
import { Img } from "../../components/Imagem";
import { Label } from "../../components/Label";

import { Button } from "../../components/Button";
import { StyledInput } from "../../components/Input/style";

export const LoginPage = () => {
  const { handleLogin } = useContext(AuthenticationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  return (
    <Main>
      <Container>
        <Img
          src={LogoHub}
          alt={"Imagem logo kenziehub"}
          width={130}
          height={50}
        />
        <StyledDiv>
          <StyledTitleOne fontSize={24} color="#fff">
            Login
          </StyledTitleOne>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              type="email"
              id="email"
              placeholder="Digite seu E-mail"
              {...register("email")}
            />
            <StyledNagetive fontSize={12}>
              {errors.email?.message}
            </StyledNagetive>

            <Label htmlFor="password">Senha</Label>
            <StyledInput
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <StyledNagetive fontSize={12}>
              {errors.password?.message}
            </StyledNagetive>

            <Button type="submit">Entrar</Button>
            <StyledDivLinkMsg>
              <StyledHeadline fontSize={12} color={"#868E96"}>
                Ainda não possui uma conta ?
              </StyledHeadline>

              <StyledLink to={"/register"}>Cadastre-se</StyledLink>
            </StyledDivLinkMsg>
          </Form>
        </StyledDiv>
      </Container>
    </Main>
  );
};
