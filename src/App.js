import "../src/App.css";

export default function App() {
  return (
    <div className="container">
      <div className="interface">
        <div className="barra"></div>

        <div className="titulo">
          <h1>
            Encontre <span>Boris</span> no local de partida
          </h1>

          <p className="subtitle">Chega em 3 minutos (800 metros)</p>
        </div>

        <div className="info-carro">
          <img src="Group 2.png" alt="Informação do motorista" />
          <div className="placa">
            <h1>BCD0D18</h1>
            <p>Honda Civic Roxo</p>
          </div>
        </div>

        <div className="input-comunica">
          <div className="campo-input">
            <input type="text" placeholder="Enviar mensagem para Boris..." />
          </div>

          <div className="emoji">
            <img src="Vector1.png" alt="x" />
            <img src="Vector2.png" alt="x" />
          </div>
        </div>
      </div>
    </div>
  );
}
