import TestFree from "../../assets/Rectangle 13.svg";
import OneMonth from "../../assets/one-month.svg";
import OneYear from "../../assets/one-year.svg";
import "./TablePrices.css";
const TablePrices = () => {
  return (
    <div className="prices">
      <div className="about-prices">
        <img src={TestFree} alt="" />
        <h2>PASSE DE 1 DIA</h2>
        <div className="test">
          <h3>Teste gratuitamente</h3>
          <a href="#">SELECIONAR</a>
        </div>
      </div>

      <div className="about-prices part-recomended">
        <div className="tet">
          <h6>RECOMENDADO POR USUÁRIOS</h6>
        </div>
        <img src={OneMonth} alt="" />
        <h2>PASSE DE 1 MÊS</h2>
        <div className="test">
          <h3>
            À partir de <span>R$99,90</span>
          </h3>
          <a href="#">SELECIONAR</a>
        </div>
      </div>

      <div className="about-prices">
        <img src={OneYear} alt="" />
        <h2>PASSE DE 1 ANO</h2>
        <div className="test">
          <h3>
            À partir de <span>R$999,00</span>
          </h3>
          <a href="#">SELECIONAR</a>
        </div>
      </div>
    </div>
  );
};

export default TablePrices;
