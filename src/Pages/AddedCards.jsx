import { useContext, useState } from "react";
import { AddCardContext } from "../context/AddCradProvider";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const AddedCards = () => {
  const { addCard, removeCard, increaseQuantity, decreaseQuantity } = useContext(AddCardContext);
  const [activeTab, setActiveTab] = useState("cart");

  // Calculate subtotal
  const subtotal = addCard.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * (item.quantity || 1), 0);
  const delivery = 37.95; // This can be dynamic if needed
  const orderTotal = subtotal + delivery;

  return (
    <div className="p-10 bg-[#233b34]">
      <div className="bg-white md:w-[70%] w-[90%] mx-auto shadow rounded-xl p-4">
        <div className="grid grid-cols-3">
          <button
            onClick={() => setActiveTab("cart")}
            className={`p-3 py-5 text-[18px] ${activeTab === "cart" ? " text-black" : " text-black"}`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`p-3 py-5 text-[18px] rounded-tl-xl ${activeTab === "orders" ? "bg-[#233b34] text-white" : "bg-[#233b34] text-white"}`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("reservations")}
            className={`p-3 py-5 text-[18px] rounded-tr-xl ${activeTab === "reservations" ? "bg-[#233b34] text-white" : "bg-[#233b34] text-white"}`}
          >
            Reservations
          </button>
        </div>
        {activeTab === "cart" && (
          <div>
            {addCard.map((item, index) => (
              <div key={index} className="flex items-center justify-between md:p-4 p-2 mb-4 border-b">

                <div className="md:w-[20%] w-[40%]">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full rounded" />
                </div>

                <div className="flex justify-between items-center flex-wrap md:w-[70%] w-[50%]">
                <div className="">
                  <h3 className="md:text-lg text-sm font-semibold">{item.title}</h3>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="md:text-lg text-sm font-semibold text-orange-500">{item.price}</span>
                </div>

                {/* Increment/Decrement Buttons */}
                <div className="flex items-center px-6 bg-[#DDDDDD] rounded-lg">
                  <button onClick={() => decreaseQuantity(item)}>
                    <FaMinus />
                  </button>
                  <span className="">{item.quantity || 1}</span>
                  <button onClick={() => increaseQuantity(item)}>
                    <FaPlus />
                  </button>
                </div>


                {/* Delete Icon */}
                <div className="">
                  <button onClick={() => removeCard(item)} className="p-2 text-red-600 bg-gray-100 rounded hover:bg-gray-200">
                    <FaTrash />
                  </button>
                </div>
                </div>
              </div>
            ))}
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="text-xl font-semibold">Order summary</h3>
              <div className="flex justify-between mt-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Order total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-4 w-full p-3 py-5 bg-[#233b34] text-white rounded-b-xl hover:bg-[#1c302a]">
              Checkout
            </button>
          </div>
        )}
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <p>This is the Orders tab content.</p>
          </div>
        )}
        {activeTab === "reservations" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Reservations</h2>
            <p>This is the Reservations tab content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedCards;
