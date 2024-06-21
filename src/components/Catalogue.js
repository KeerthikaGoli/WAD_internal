import React, { useState } from 'react';

const Catalogue = () => {
    
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 7.49 },
        { id: 4, name: 'Product 4', price: 15.00 },
        { id: 5, name: 'Product 5', price: 12.99 },
    ]);

    return (
        <div>
            <h2>Product Catalogue</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogue;
