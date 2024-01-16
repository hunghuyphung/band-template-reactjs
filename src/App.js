import './globalStyles.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
        <Header></Header>
        <Slider></Slider>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}

export default App;
