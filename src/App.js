import React, { useState, useEffect } from 'react'
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async(productId, quanitily) => {
        const item = await commerce.cart.add(productId, quanitily);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App 