import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <header className="header"></header>
      <div className="page">
        <h1 className="title">DICTIONARY</h1>
        <Dictionary />
      </div>
      <Footer />
    </div>
  );
}

export default App;
