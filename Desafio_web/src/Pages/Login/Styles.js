import styled from "styled-components";
import { Ceu } from "../../Assets/index";

export const Container = styled.div`
  background-image: url(${Ceu});
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Centro_Login = styled.div`
  width: 450px;
  height: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  gap: 10px;
  border-radius: 25px;
  background-color: #e8f4f9;
  filter: drop-shadow(8px 2px 2px black);
`;

export const Aviao = styled.img``;

export const Usuario = styled.label`
  display: flex;
`;

export const Senha = styled.label`
  display: flex;
`;

export const Entrar = styled.button`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  width: 80px;
  font-weight: bold;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: lightblue;
    background-color: black;
  }
`;


export const Cadastro = styled.button`
  border-radius: 15px;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  width: 80px;
  font-weight: bold;
  font-size: 15px;
`;
