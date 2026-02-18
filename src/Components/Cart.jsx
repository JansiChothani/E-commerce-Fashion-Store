import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Cart() {

    let name = useSelector((state) => state.cart)
    let dispatch = useDispatch();

    return (
        <div>
            {name.map((item) => (
                <div className="product-card" key={item.id}>
                    <Link to={item.link} className="image-wrap">
                        <img src={item.img} alt={item.title} />
                        <span className="quick-view">Quick View</span>
                    </Link>
                    

                    <div className="product-info">
                        <h3>{item.title}</h3>
                        <p className="price">$ {item.price}</p>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default Cart
