import ModelWoman from "../../assets/pngwing 3.svg";
import "./SectionSignUp.css";
const SectionSignUp = () => {
  return (
    <section className="container-sign-up">
      <div className="sign-up">
        <div className="contact">
          <h1>ENTRE EM CONTATO</h1>
          <p>Matricule-se agora mesmo! Fale com um de nossos atendentes</p>
          <form>
            <div className="input">
              <input type="text" placeholder="NOME" />
            </div>
            <div className="input">
              <input type="text" placeholder="TELEFONE" />
            </div>
          </form>
          <button>SOLICITAR CONTATO</button>
        </div>
        <img className="model-woman" src={ModelWoman} alt="" />
      </div>
    </section>
  );
};

export default SectionSignUp;
