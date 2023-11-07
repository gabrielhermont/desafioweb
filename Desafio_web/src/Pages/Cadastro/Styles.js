import styled from "styled-components";
import { Gradiente } from "../../Assets/index";

export const Container = styled.div`
  background-image: url(${Gradiente});
  display: flex;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

export const GradienteImg = styled.img``;

export const Centro_cadastro = styled.div`
  display: flex;
  flex-direction: column;
  border: white;
  background-color: #e8f4f9;
  width: 400px;
  height: 720px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: auto;
  border-radius: 50px;
  filter: drop-shadow(5px, 5px, 5px black);
`;

export const Nome = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Departamento = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Cargo = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Email = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Senha = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Confirmar_senha = styled.label`
  display: flex;
  color: #006f68;
  font-size: 30px;
  flex-direction: column;
`;

export const Input_nome = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Input_departamento = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Input_cargo = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Input_email = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Input_senha = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Input_confirmar = styled.input`
  background-color: #83fbf4;
  border-radius: 5px;
  width: 270px;
  height: 30px;
  border: white;
`;

export const Cabeçalho = styled.div`
  font-size: 30px;
  color: #006f68;
  display: flex;
  justify-content: center;
`;

export const BotaoCadastro = styled.button`
  background-color: #fbff30;
  border-radius: 10px;
  width: 150px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
