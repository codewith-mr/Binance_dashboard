import "./App.css";
import Navbar from "./Component/Navbar/Navbar.js";
import Home from "./Screen/Home";
import Footer from "./Component/Footer/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
