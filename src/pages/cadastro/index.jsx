
import { MdAccountCircle, MdAddAPhoto, MdEmail, MdLock } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from 'react-router-dom'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api'


import { Column, Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from './styles' 

const schema = yup.object({
  nome: yup.string().required('Campo Obrigatorio'),

  email: yup.string().email('email não é válido').required('Campo Obrigatorio'),
  password: yup.string().min(3, 'No minimo 3 caracteres' ).required('Campo Obrigatorio'),
}).required();

const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: {errors, isValid} } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange',
  
  });
/*
  const onSubmit = async formData => {
    try {
      const{data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1){
        navigate('/feed')
      }else{
        alert('Email ou senha invalido')
      }
      

    } catch {
      alert('Houve um erro, tente novamente')
    }
  };
*/
  const handleClickSignIn = () => { 
    navigate('/login')
  }


  return (<>

     <Header />
     <Container>
        <Column>
          <Title>  
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>

        <Wrapper>
    <TitleLogin> Comece agora gratis </TitleLogin>
    <SubTitleLogin> Crie uma conta </SubTitleLogin>

    <form onSubmit={handleSubmit(handleClickSignIn)}>
      
      <Input name="nome" errorMessage={errors?.message} control={control} placeholder="Nome Completo" leftIcon={<MdAccountCircle />}  />  
      <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
      <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
      <Button title="Criar um conta" variant="secondary" type="submit" />
    </form>
    <Row>
    <SubTitleLogin>
      <p>Ao clicar em "criar minha conta grátis", declaro que aceito as políticas de Privacidade e os Termos de uso da DIO. </p>
      <p>já tenho conta. <span onClick={handleClickSignIn}>Fazer login</span></p>
      
      
      
      <CriarText >
        
      </CriarText>

      </SubTitleLogin>
     
    </Row>
        </Wrapper>
        </Column>
     </Container>


    </>)
}

export {Cadastro}