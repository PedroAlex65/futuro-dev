import Button from "../../Components/Button/ButtonCustom";
import Sport from "../../assets/sport.svg";
import Dumbbell from "../../assets/dumbbell 1.svg";
import Trainer from "../../assets/trainer 1.svg";
import Gym from "../../assets/gym 1.svg";
import "./SectionDiferencias.css";
const SectionDiferencias = () => {
  return (
    <section>
      <div className="container-section">
        <div className="title">
          <h1>
            NOSSOS <span>DIFERENCIAS</span>
          </h1>
        </div>

        <div className="about-differences">
          <div className="box-differences">
            <div className="box">
              <img src={Sport} alt="" />
              <h4>Equipe Qualificada</h4>
              <p>
                Profissionais altamente capacitados e motivados a ajudá-lo a
                alcançar seus objetivos.
              </p>
              <Button props="CONHEÇA NOSSOS PROFISSIONAIS" />
            </div>
          </div>

          <div className="box-differences">
            <div className="box">
              <img src={Dumbbell} alt="" />
              <h4>Ambiente motivador</h4>
              <p>
                Um ambiente seguro e inspirador para ajudá-lo a manter-se
                motivado durante seus treinos.
              </p>
              <Button props="CONHEÇA NOSSOS PROFISSIONAIS" />
            </div>
          </div>

          <div className="box-differences">
            <div className="box">
              <img src={Trainer} alt="" />
              <h4>Aulas Diversas</h4>
              <p>
                Oferecemos uma ampla variedade de aulas, desde musculação até
                dança, para atender a todos os interesses.
              </p>
              <Button props="CONHEÇA NOSSOS PROFISSIONAIS" />
            </div>
          </div>

          <div className="box-differences">
            <div className="box">
              <img src={Gym} alt="" />
              <h4>Equipe Qualificada</h4>
              <p>
                Mantemos nossos equipamentos atualizados para garantir a
                segurança e eficiência de nossos clientes.
              </p>
              <Button props="CONHEÇA NOSSOS PROFISSIONAIS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDiferencias;
