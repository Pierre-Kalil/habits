import "./App.css";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/Global";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <div>
        <Toaster />
      </div>
      <Routes />
    </>
  );
}

export default App;
