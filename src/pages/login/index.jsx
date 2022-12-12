import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha invalido");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleClickSignIn = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>O seu futuro global agora ! ! !</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin> Faça seu cadastro </TitleLogin>
            <SubTitleLogin> Faça seu login </SubTitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText> Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickSignIn}>Criar conta </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
