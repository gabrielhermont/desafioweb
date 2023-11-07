import {
  GradienteImg,
  Cabeçalho,
  Container,
  Centro_cadastro,
  Nome,
  Departamento,
  Cargo,
  Email,
  Senha,
  Confirmar_senha,
  Input_nome,
  Input_departamento,
  Input_cargo,
  Input_email,
  Input_senha,
  Input_confirmar,
  BotaoCadastro,
} from "./Styles";

export default function Cadastro() {
  return (
    <Container>
      <Centro_cadastro>
        <Cabeçalho>CADASTRO</Cabeçalho>
        <Nome>
          Nome
          <Input_nome></Input_nome>
        </Nome>
        <Departamento>
          Departamento
          <Input_departamento></Input_departamento>
        </Departamento>
        <Cargo>
          Cargo
          <Input_cargo></Input_cargo>
        </Cargo>
        <Email>
          Email
          <Input_email></Input_email>
        </Email>
        <Senha>
          Senha
          <Input_senha></Input_senha>
        </Senha>
        <Confirmar_senha>
          Confirmar senha
          <Input_confirmar></Input_confirmar>
        </Confirmar_senha>
        <BotaoCadastro>Confirmar Cadastro</BotaoCadastro>
      </Centro_cadastro>
    </Container>
  );
}
