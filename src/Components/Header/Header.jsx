import Logo from "../../assets/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-header">
      <img src={Logo} alt="logo" />
      <ul>
        <li>SOBRE</li>
        <li>SERVIÇOS</li>
        <li>PREÇOS</li>
        <li>EQUIPAMENTOS</li>
        <button href="#">REGISTRE-SE</button>
      </ul>
      </div>
    </header>
  );
};

export default Header;
