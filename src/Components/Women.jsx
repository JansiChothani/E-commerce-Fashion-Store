import React from 'react'
import { Link } from 'react-router-dom';

const womens = [
 {
    id: 1,
    title: "Pleated Champagne Gown",
    price: 244.99,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155649/501D01LFA811_20Champagne_20_1.jpg",
  },
   {
    id: 2,
    title: "V-Neck Pleated A-Line Evening Gown",
    price: 80,
    img: "/dress.jpeg",
  },
];

const Women = () => {
  return (
    <div className="home-grid">
      {womens.map((item) => (
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


export default Women
