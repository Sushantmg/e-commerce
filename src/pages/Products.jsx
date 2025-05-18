import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fruitVeggies = [
            { name: "Apple", category: "fruits", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", desc: "Crisp and juicy fresh apples." },
            { name: "Banana", category: "fruits", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8", desc: "Sweet and ripe bananas." },
            { name: "Carrot", category: "vegetables", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", desc: "Crunchy and rich in Vitamin A." },
            { name: "Broccoli", category: "vegetables", image: "https://images.unsplash.com/photo-1584270354949-1a5fe67c27b1", desc: "Fresh green broccoli florets." },
            { name: "Tomato", category: "vegetables", image: "https://images.unsplash.com/photo-1582515073490-d6c08d3ffb9b", desc: "Juicy organic tomatoes." },
            { name: "Strawberry", category: "fruits", image: "https://images.unsplash.com/photo-1587732059531-3f0f6f1c6a17", desc: "Sweet red strawberries." },
            { name: "Pineapple", category: "fruits", image: "https://images.unsplash.com/photo-1582281298056-dcdb9f822e3b", desc: "Tangy tropical pineapple." },
            { name: "Spinach", category: "vegetables", image: "https://images.unsplash.com/photo-1606788075761-9ff6f06cbcf9", desc: "Fresh leafy spinach." },
        ];

        const updatedData = fruitVeggies.map((item, index) => {
            const price = (Math.random() * 5 + 1).toFixed(2);
            const hasDiscount = Math.random() < 0.5;
            const discount = hasDiscount ? Math.floor(Math.random() * 3 + 1) * 10 : 0;
            const discountedPrice = hasDiscount ? (price - (price * discount) / 100).toFixed(2) : null;

            return {
                id: index + 1,
                title: `Fresh ${item.name}`,
                category: item.category,
                image: item.image,
                description: item.desc,
                price: parseFloat(price),
                discount,
                discountedPrice: discountedPrice ? parseFloat(discountedPrice) : null,
            };
        });

        setProducts(updatedData);
        setFilteredProducts(updatedData);
    }, []);

    const filterSortSearchProducts = () => {
        let tempProducts = [...products];

        if (categoryFilter !== "all") {
            tempProducts = tempProducts.filter(p => p.category === categoryFilter);
        }
        if (searchTerm.trim() !== "") {
            tempProducts = tempProducts.filter(p =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (sortOrder === "asc") {
            tempProducts.sort((a, b) => (a.discountedPrice ?? a.price) - (b.discountedPrice ?? b.price));
        } else if (sortOrder === "desc") {
            tempProducts.sort((a, b) => (b.discountedPrice ?? b.price) - (a.discountedPrice ?? a.price));
        }

        setFilteredProducts(tempProducts);
    };

    React.useEffect(() => {
        filterSortSearchProducts();
    }, [sortOrder, categoryFilter, searchTerm, products]);

    // Add product to cart
    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                // Increase quantity
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Add new product with quantity 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove product from cart or reduce quantity
    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === productId);
            if (!existing) return prevCart;
            if (existing.quantity === 1) {
                return prevCart.filter(item => item.id !== productId);
            }
            return prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // Calculate total items and price in cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => {
        const price = item.discountedPrice ?? item.price;
        return sum + price * item.quantity;
    }, 0);

    return (
        <div className="bg-green-50 p-6">
            {/* Cart summary */}
            <div className="mb-6 p-4 bg-white rounded shadow flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg text-green-800">Shopping Cart</h3>
                    <p className="text-green-700">{totalItems} item(s) | ${totalPrice.toFixed(2)}</p>
                </div>
                <button
                    onClick={() => setCart([])}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    disabled={cart.length === 0}
                >
                    Clear Cart
                </button>
            </div>

            {/* Cart items list */}
            {cart.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cart.map(item => (
                        <div key={item.id} className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
                            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded mb-2" loading="lazy" />
                            <h4 className="text-green-800 font-semibold">{item.title}</h4>
                            <p>Qty: {item.quantity}</p>
                            <p>
                                Price: ${((item.discountedPrice ?? item.price) * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                            >
                                Remove One
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h2 className="text-2xl font-semibold text-green-800">Fresh Fruits & Vegetables</h2>
                <div className="flex gap-3 flex-wrap">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="px-3 py-1 border rounded w-48"
                        aria-label="Search products"
                    />

                    <select
                        onChange={e => setCategoryFilter(e.target.value)}
                        value={categoryFilter}
                        className="px-3 py-1 border rounded"
                        aria-label="Filter by category"
                    >
                        <option value="all">All Categories</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                    </select>

                    <select
                        onChange={e => setSortOrder(e.target.value)}
                        value={sortOrder}
                        className="px-3 py-1 border rounded"
                        aria-label="Sort products by price"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-600 col-span-full">No products found.</p>
                ) : (
                    filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                loading="lazy"
                                className="w-full h-40 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-bold text-green-700 mb-1">{product.title}</h3>
                            <p className="text-sm text-gray-600 text-center mb-2">{product.description}</p>
                            <div className="mb-2">
                                {product.discount > 0 ? (
                                    <div className="text-sm text-red-600">
                                        <span className="line-through mr-2">${product.price.toFixed(2)}</span>
                                        <span className="font-bold text-green-800">${product.discountedPrice.toFixed(2)}</span>
                                        <span className="ml-1 text-xs text-red-500">({product.discount}% OFF)</span>
                                    </div>
                                ) : (
                                    <div className="text-green-700 font-semibold text-sm">${product.price.toFixed(2)}</div>
                                )}
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
