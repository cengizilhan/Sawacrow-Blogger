import Header from "./Layouts/Header/Header.js";
import Index from "./Pages/Index";
import Article from "./Pages/Article";
import Footer from "./Layouts/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/Css/bootstrap.css";
import "./Assets/Css/general.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:articleid" element={<Article  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
