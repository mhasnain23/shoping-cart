"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { cart } = useSelector((state) => state);
    console.log(cart?.cartItems);


    useEffect(() => {

        setTotalAmount(cart?.cartItems.reduce((acc, curr) => acc + curr.price, 0))

    }, [cart?.cartItems])



    if (!cart?.cartItems.length) return <h2 className="p-10 text-4xl font-bold">Your Cart is Empty</h2>;
    const dispatch = useDispatch();


    function handleRemoveFromCart(getCurrentItemID) {
        dispatch(removeFromCart(getCurrentItemID))
    }


    return (
        <div className="bg-white py-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
                <div className="overflow-y-auto">
                    <table className="mt-12 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-gray-700 p-4">Title</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            {cart?.cartItems.map((item) => (
                                <tr>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-6 w-max">
                                            <div className="h-36 shrink-0">
                                                <img
                                                    src={item?.thumbnail}
                                                    alt={item?.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-lg text-black font-bold">{item?.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-lg text-black font-bold">${item?.price}</p>
                                    </td>
                                    <td>
                                        <Button type="button" onClick={() => handleRemoveFromCart(item?.id)}>Remove</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="max-w-xl ml-auto mt-6">
                    <div>
                        <p className="text-lg text-black font-bold">Total <span>${totalAmount}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
