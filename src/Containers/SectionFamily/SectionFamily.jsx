import { useState, useEffect } from "react";
import ImageModels from "../../assets/pngwing 2.svg";
import Retangule16 from "../../assets/Rectangle 16.png";
import Retangule17 from "../../assets/Rectangle 17.png";
import Retangule18 from "../../assets/Rectangle 18.png";
import "./SectionFamily.css";

 
const SectionFamily = () => {
  const [count, setCount] = useState(0);

  function anima() {
    let start = 0;
    const end = 15;


    const timer = setInterval(() => {
      start++;
      setCount(start);

      if (start >= end) clearInterval(timer);
    }, 20);
  }

  useEffect(() => {
    anima(); // Adicionei essa função para que quando a pagina iniciasse a função anima fosse chamada, 
    // ou seja por mais que o h2 estivesse com uma função de onclik esse useEffect vai adicionar um efeito colateral nela
  }, []);

function handleMutation(){

}

const observar = new MutationObserver(handleMutation)

  return (
    <section className="container-family">  
      <div className="family">
      <img className="retangule16" src={Retangule16} alt="" />
      <img className="retangule17" src={Retangule17} alt="" />
      <img className="retangule18" src={Retangule18} alt="" />
        <div className="images">
        
          <img className="image-family" src={ImageModels} alt="" />
        </div>
        <div className="be-part-of-it">
          <div className="family-texts">
            <h1>
              FAÇA PARTE <span>DA FAMÍLIA</span>
            </h1>
            <p>
              Nossa academia tem milhares de clientes satisfeitos com resultados
              surpreendentes. Junte-se a nós e comece a transformar seu corpo
              agora!
            </p>
          </div>
          <div className="number-family">
            <div className="data units">
              <h2 className="animaNumeros">+{count}</h2>
              <p>Unidades na cidade de São Paulo.</p>
            </div>
            <div className="data registered-students">
              <h2 className="animaNumeros">+2000</h2>
              <p>Alunos matriculados em nossas unidades.</p>
            </div>
            <div className="data units">
              <h2 className="animaNumeros">+100</h2>
              <p>Professores altamente qualificados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFamily;
