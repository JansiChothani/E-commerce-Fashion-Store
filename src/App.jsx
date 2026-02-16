import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Accessories from "./Components/Accessories";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
