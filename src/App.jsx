import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bizCard">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}

export default App;
