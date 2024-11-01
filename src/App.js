import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  const [colaborador, setColaboradores] = useState([]);

  const AoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          AoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
