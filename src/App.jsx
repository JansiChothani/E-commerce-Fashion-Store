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
    <>
    {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reg" element={<Register />} />
      </Routes>
   {/* </BrowserRouter> */}
    </>
  );
}

export default App;
