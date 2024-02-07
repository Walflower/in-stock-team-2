import "./App.scss";
// import Testing from "../src/styles/Testing/Testing.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"; //bare bones structure

function App() {
  return (
    <div className="App">
      {/* <Testing /> */}
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
