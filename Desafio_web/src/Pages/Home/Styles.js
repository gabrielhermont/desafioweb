import styled from "styled-components";
import { Gradiente } from "../../Assets/index";
import { Table } from "antd";

export const Header = styled.div`
  background-color: #e8f4f9;
  display: flex;
  height: 70px;
  gap: 30px;
  width: 100%;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${Gradiente});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Foto = styled.img`
  width: 100px;
`;

export const Ponto = styled.button`
  background-color: #07d8e5;
  border-radius: 10px;
  height: 25px;
  width: 55px;
  border: white;
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.24),
      0 12px 42px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

export const Perfil = styled.button`
  background-color: #07d8e5;
  border-radius: 10px;
  height: 25px;
  width: 55px;
  border: white;
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.24),
      0 12px 42px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

export const Sair = styled.button`
  background-color: #fbff30;
  border-radius: 10px;
  height: 25px;
  width: 55px;
  align-items: center;
  display: grid;
  justify-self: end;
  border: white;
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.24),
      0 12px 42px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

export const Tabela = styled(Table)``;

export const Carrossel = styled.div`
  display: flex;
  max-width: 70%;
  flex: 1;
  justify-content: center;
  & > img {
    object-fit: cover;
  }
`;

export const Prev = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 3vw;
  color: white;
  line-height: 2px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 50px);
`;

export const Next = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 3vw;
  color: white;
  line-height: 2px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 50px);
`;

export const Centro = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FazerLogin = styled.button`
  width: 100px;
  height: 35px;
  background-color: #fbff30;
  border: white;
  justify-self: end;
  display: grid;
  align-items: center;
  margin-right: 20px;
  margin-top: 30px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const Linha = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: end;
`;
