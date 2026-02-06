<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";

const products = [
  {
    id: 1,
    title: "Pleated Champagne Gown",
    price: 244.99,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155649/501D01LFA811_20Champagne_20_1.jpg",
  },
  {
    id: 2,
    title: "Gold Hoop Earrings",
    price: 81.49,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155805/c4fd12e7-cea9-441c-a447-f9cd9600d754_1.png",
  },
  {
    id: 3,
    title: "Men Ethnic Kurta",
    price: 176.89,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155686/91fDqZzkF5L._UY1100_.jpg",
  },
  {
    id: 4,
    title: "Men Linen Casual Shirt",
    price: 135.95,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155724/81pus6cV3gL._UY1100_.jpg",
  },
  {
    id: 5,
    title: "Kids Pink Party Dress",
    price: 108.72,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155814/e8cc11bc-af2e-4b91-a48e-a00e8f2a2b3c.png",
  },
  {
    id: 6,
    title: "Baby Duck Romper",
    price: 67.85,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155559/41I4p8AEPNL._UY1100_.jpg",
  },
  {
    id: 7,
    title: "V-Neck Pleated A-Line Evening Gown",
    price: 80,
    img: "/dress.jpeg",
  },
  {
    id: 8,
    title: "Men wedding Kurta Set",
    price: 70.5,
    img: "/kurta.jpg",
  },
  {
    id: 9,
    title: "Baby Girl Floral Dress",
    price: 100,
    img: "/kids_1.jpg",
  },
  {
    id: 10,
    title: "Baby boy wedding suit",
    price: 90.5,
    img: "/kids_2.jpg",
  },
];

const ProductCard = () => {
  return (
    <div className="home-grid">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <Link to={item.link} className="image-wrap">
            <img src={item.img} alt={item.title} />
            <span className="quick-view">Quick View</span>
          </Link>

          <div className="product-info">
            <h3>{item.title}</h3>
            <p className="price">$ {item.price}</p>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
=======
import { Link } from "react-router-dom";
import "../Styles/ProductCard.css";

const products = [
  {
    id: 1,
    title: "Pleated Champagne Gown",
    price: 244.99,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155649/501D01LFA811_20Champagne_20_1.jpg",
  },
  {
    id: 2,
    title: "Gold Hoop Earrings",
    price: 81.49,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155805/c4fd12e7-cea9-441c-a447-f9cd9600d754_1.png",
  },
  {
    id: 3,
    title: "Men Ethnic Kurta",
    price: 176.89,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155686/91fDqZzkF5L._UY1100_.jpg",
  },
  {
    id: 4,
    title: "Men Linen Casual Shirt",
    price: 135.95,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155724/81pus6cV3gL._UY1100_.jpg",
  },
  {
    id: 5,
    title: "Kids Pink Party Dress",
    price: 108.72,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155814/e8cc11bc-af2e-4b91-a48e-a00e8f2a2b3c.png",
  },
  {
    id: 6,
    title: "Baby Duck Romper",
    price: 67.85,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155559/41I4p8AEPNL._UY1100_.jpg",
  },
  {
    id: 7,
    title: "V-Neck Pleated A-Line Evening Gown",
    price: 67.85,
    img: "/dress.jpeg",
  },
];

const ProductCard = () => {
  return (
    <div className="home-grid">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <Link to={item.link} className="image-wrap">
            <img src={item.img} alt={item.title} />
            <span className="quick-view">Quick View</span>
          </Link>

          <div className="product-info">
            <h3>{item.title}</h3>
            <p className="price">$ {item.price}</p>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
>>>>>>> 2591678f67b9df7a12de2aeaef5945965f7b1f81
