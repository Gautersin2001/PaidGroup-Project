import BeAPatner from "./components/beAPatner/BeAPatner";
import FastStart from "./components/fastStart/FastStart";
import FooterBlock from "./components/footer/FooterBlock";
import Header from "./components/header/Header";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import LessTime from "./components/lessTime/LessTime";
import'./media.css'


function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLogo />
      <FastStart />
      <BeAPatner />
      <LessTime />
      <FooterBlock />
    </div>
  );
}

export default App;
