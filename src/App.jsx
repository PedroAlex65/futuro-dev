import Home from "./Containers/Home/Home";
import SectionDiferencias from "./Containers/SectionDiferencias/SectionDiferencias";
import SectionFamily from "./Containers/SectionFamily/SectionFamily";
import SectionPrices from "./Containers/SectionPrices/SectionPrices";
import SectionSignUp from "./Containers/SectionSignUp/SectionSignUp";
import "./GlobalStyles.css";
function App() {
  return (
    <>
      <Home />
      <SectionDiferencias />
      <SectionPrices />
      <SectionFamily />
      <SectionSignUp />
    </>
  );
}

export default App;
