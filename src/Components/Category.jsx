import "../styles/Category.css";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const Category = () => {

  return (
    <>
      {/* <Header /> */}
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
