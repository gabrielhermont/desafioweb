import {
  Container,
  Header,
  Perfil,
  Ponto,
  Sair,
  Tabela,
  Carrossel,
  Foto,
  Next,
  Prev,
  Centro,
  FazerLogin,
  Linha,
} from "../Home/Styles";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carrossel1, Carrossel2, Carrossel3, Logo } from "../../Assets/index";
import { Carousel } from "react-responsive-carousel";
const dataSource = [
  {
    key: "1",
    Nome: "Gabriel",
    Departamento: 32,
    Cargo: "10 Downing Street",
    Tempo: "00:50",
  },
  {
    key: "2",
    Nome: "John",
    Departamento: 42,
    Cargo: "10 Downing Street",
    Tempo: "00:25",
  },
];

const columns = [
  {
    title: "Nome",
    dataIndex: "Nome",
    key: "Nome",
  },
  {
    title: "Departamento",
    dataIndex: "Departamento",
    key: "Departamento",
  },
  {
    title: "Cargo",
    dataIndex: "Cargo",
    key: "Cargo",
  },

  {
    title: "Tempo",
    dataIndex: "Tempo",
    key: "Tempo",
  },
];
export default function Home() {
  const imagens = [Carrossel1, Carrossel2, Carrossel3];
  return (
    <Container>
      <Header>
        <Foto src={Logo}></Foto>
        <Ponto> Ponto </Ponto>
        <Perfil> Perfil </Perfil>
        <Sair>Sair</Sair>
      </Header>
      <Centro>
        <Carrossel>
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            stopOnHover={true}
            dynamicHeight={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Prev
                  onClick={onClickHandler}
                  title={label}
                  style={{ left: 0 }}
                >
                  <BiLeftArrowCircle />
                </Prev>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Next
                  onClick={onClickHandler}
                  title={label}
                  style={{ right: 0 }}
                >
                  <BiRightArrowCircle />
                </Next>
              )
            }
            className="carousel-wrapper"
          >
            {imagens.map((fotos) => (
              <img src={fotos} />
            ))}
          </Carousel>
        </Carrossel>
      </Centro>
      <Linha>
        <FazerLogin>Fazer Login</FazerLogin>
      </Linha>
      <Tabela
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
      />
      ;
    </Container>
  );
}
