import {
  Cadastro,
  Centro_Login,
  Container,
  Entrar,
  Senha,
  Usuario,
} from "./Styles";
import { Aviao } from "../../Assets/index";

export default function Login() {
  return (
    <Container>
      <Centro_Login>
        <img src={Aviao} alt="avião" />
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
