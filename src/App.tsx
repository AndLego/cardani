import { Navbar, Cover, HowItsMade, Team, Footer } from "./components/index"
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <Navbar />
        <Cover />
        <HowItsMade />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
