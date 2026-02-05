import React from 'react'
import { Link } from 'react-router-dom';

const kids_p = [
 {
    id: 1,
    title: "Kids Pink Party Dress",
    price: 108.72,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155814/e8cc11bc-af2e-4b91-a48e-a00e8f2a2b3c.png",
  },
  {
    id: 2,
    title: "Baby Duck Romper",
    price: 67.85,
    img: "https://iamtechiepartneruae.vteximg.com.br/arquivos/ids/155559/41I4p8AEPNL._UY1100_.jpg",
  },
  {
    id: 3,
    title: "Baby Girl Floral Dress",
    price: 100,
    img: "/kids_1.jpg",
  },
  {
    id: 4,
    title: "Baby boy wedding suit",
    price: 90.5,
    img: "/kids_2.jpg",
  },
];

const Kids = () => {
  return (
    <div className="home-grid">
      {kids_p.map((item) => (
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


export default Kids
