import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SqaureAnimation from "./components/SqaureAnimation";

function App() {
  return (
    <div className="bg-[#f4d1a9] px-5 py-2 h-screen">
      <SqaureAnimation />
      <div className="relative">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
