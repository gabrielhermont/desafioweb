import {
  Aviao,
  Cadastro,
  Centro_Login,
  Container,
  Entrar,
  Senha,
  Usuario,
} from "./Styles";

export default function Login() {
  return (
    <Container>
      <Centro_Login>
        <Aviao src="assets/avião.png" alt="avião" />
        <div>
          <Usuario>Usuário</Usuario>
          <input></input>
        </div>
        <div>
          <Senha>Senha</Senha>
          <input></input>
        </div>

        <Entrar>Entrar</Entrar>
        <Cadastro>Cadastro</Cadastro>
      </Centro_Login>
    </Container>
  );
}
