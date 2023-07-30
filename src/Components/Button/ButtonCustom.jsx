import "./ButtonCustom.css";
import Arrow from "../../assets/Arrow.svg";

const ButtonCustom = ({props}) => {
  return (
    <div>
      <button className="button-custom">
        {props} <img src={Arrow} />
      </button>
    </div>
  );
};

export default ButtonCustom;
