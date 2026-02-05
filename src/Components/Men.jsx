import React from 'react'
import { Link } from 'react-router-dom';

const Mens = [
  {
    id: 1,
    title: "Men Ethnic Kurta",
    price: 176.89,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155686/91fDqZzkF5L._UY1100_.jpg",
  },
  {
    id: 2,
    title: "Men Linen Casual Shirt",
    price: 135.95,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155724/81pus6cV3gL._UY1100_.jpg",
  },
  {
    id: 3,
    title: "Men wedding Kurta Set",
    price: 70.5,
    img: "/kurta.jpg",
  },
];

const Men = () => {
  return (
    <div className="home-grid">
      {Mens.map((item) => (
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


export default Men
