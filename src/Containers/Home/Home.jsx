import Button from "../../Components/Button/ButtonCustom.jsx";
import Header from "../../Components/Header/Header.jsx";
import Model from "../../assets/model-academy.svg";
import ImageWeight from "../../assets/barra.svg";
import Rectangule1 from "../../assets/Rectangle 1.png";
import Rectangule2 from "../../assets/Rectangle 2.png";
import Rectangule3 from "../../assets/Rectangle 3.png";

import "./Home.css";
const Home = () => {
  const mapBarra = [
    "CONSULTORIA INDIVIDUAL",
    "+20 PROFESSORES",
    "TREINE DA SUA FORMA",
    "+15 MINUTOS",
    "MONTAMOS SEU TREINO",
  ];

  return (
    <div className="main">
      <Header />
      <div className="about">
        <img className="rectangule1" src={Rectangule1} alt="" />
        <img className="rectangule2" src={Rectangule2} alt="" />
        <img className="rectangule3" src={Rectangule3} alt="" />
        <div className="about-texts">
          <h1>
            AQUI NÃO SE <span>TREINA FOFO</span>
          </h1>
          <p>
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos fitness conosco. Experimente hoje!
          </p>
          <Button props="COMEÇAR" />
        </div>
        <div className="image-model">
          <img className="teste-modelo" src={Model} alt="" />
        </div>
      </div>
      <div className="barra">
        {mapBarra.map((barr, index) => {
          return (
            <h3 key={index}>
              {barr} <img src={ImageWeight} alt="" />
            </h3>
          );
        })}
        <h3></h3>
      </div>
    </div>
  );
};

export default Home;
