import "../styles/Category.css";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

const Category = () => {

  return (
    <>
      <Header />
      <div className="coverpage">
        <img src="\COVERPAGE.png" alt="" />
      </div>

      <div className="container page">
        <main className="products">
          <h1 style={{ marginBottom: "20px", marginTop:"10px" }}>Featured Products</h1>

          <ProductCard />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Category;
