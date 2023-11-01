import "./app.css";

function App() {
  return (
    <div className="fundo">
      <div className="centro_login">
        <img src="assets/avião.png" alt="avião" />
        <div>
          <label className="usuario">Usuário</label>
          <input></input>
        </div>
        <div>
          <label className="senha">Senha</label>
          <input></input>
        </div>

        <button className="entrar">Entrar</button>
        <button className="cadastro">Cadastro</button>
      </div>
      <div className="nuvens"></div>
    </div>
  );
}

export default App;
