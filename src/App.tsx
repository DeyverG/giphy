import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Images } from "./pages/images/Images";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
