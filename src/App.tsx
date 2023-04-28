import { Navbar, Cover, HowItsMade } from "./components/index"
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <Navbar />
        <Cover />
        <HowItsMade />
        <HowItsMade />
        <HowItsMade />
      </div>
    </>
  );
}

export default App;
