import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components/index";
import { Contact, Landing, Menu } from "./pages/index";

function App() {
  return (
    <>
      <HashRouter>

        <div className="background">
          <Navbar />

          <Routes>
            <Route path="/" element={< Landing />} />
            <Route path="/menu" element={< Menu />} />
            <Route path="/contact" element={< Contact />} />
          </Routes>

          <Footer />

        </div>
      </HashRouter>
    </>
  );
}

export default App;
