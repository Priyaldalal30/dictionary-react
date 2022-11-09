import "./App.css";
import "./Responsive.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="page">
        <h1 className="title">DICTIONARY</h1>
        <Dictionary />
      </div>
      <Footer />
    </div>
  );
}

export default App;
