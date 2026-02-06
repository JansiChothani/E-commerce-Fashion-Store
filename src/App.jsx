import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Components/Category.jsx";
import Header from "./Components/Header";
import Men from "./Components/Men";
import Women from "./Components/Women.jsx";
import Kids from "./Components/Kids.jsx";
import Accessories from "./Components/Accessories.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
