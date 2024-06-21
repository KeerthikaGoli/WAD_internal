import React, { useState } from 'react';

const Kart = () => {
    const [cartItems, setCartItems] = useState([]);

    
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
        </div>
    );
};

export default Kart;
