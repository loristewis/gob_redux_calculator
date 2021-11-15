import Calculator from "./components/Calculator";
import Result from "./components/Result";
import GlobalStyle from "./Styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Calculator/>
      <Result/>
    </div>
  );
}

export default App;
