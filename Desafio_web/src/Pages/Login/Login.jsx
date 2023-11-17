import {
  Cadastro,
  Centro_Login,
  Container,
  Entrar,
  Form,
  Senha,
  Usuario,
} from "./Styles";
import { Aviao } from "../../Assets/index";
import { useState } from "react";

export default function Login() {
  //Adquirindo o email escrito pelo usuário
  const [email, setEmail] = useState("");

  //Adquirindo a senha escrita pelo usuário
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    //Função executada no momento em que o formulário é submetido

    e.preventDefault();
    console.log({ email, senha });
  };

  //ESTRUTURA DA PÁGINA:
  //--------------------------------------------------
  return (
    <Container>
      <Centro_Login>
        <img src={Aviao} alt="avião" />
        <div>
          <Usuario>Usuário</Usuario>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <Senha>Senha</Senha>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          ></input>
        </div>
        <Form onSubmit={handleSubmit}>
          <Entrar type="submit">Entrar</Entrar>
        </Form>
        <Cadastro>Cadastro</Cadastro>
      </Centro_Login>
    </Container>
  );
  //--------------------------------------------------
}
