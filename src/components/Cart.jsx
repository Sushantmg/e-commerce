import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

    return (
        <div className="mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg text-green-800 dark:text-green-300">Shopping Cart</h3>
                    <p className="text-green-700 dark:text-green-200">{totalItems} item(s) | ${totalPrice.toFixed(2)}</p>
                </div>
                <button
                    onClick={clearCart}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    disabled={cart.length === 0}
                >
                    Clear Cart
                </button>
            </div>

            {cart.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cart.map(item => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-3 flex flex-col items-center">
                            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded mb-2" />
                            <h4 className="text-green-800 dark:text-green-300 font-semibold">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                            <p className="text-gray-800 dark:text-gray-200">
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
        </div>
    );
}
