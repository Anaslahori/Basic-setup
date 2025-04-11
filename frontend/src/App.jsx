import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <h1>kaif</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
