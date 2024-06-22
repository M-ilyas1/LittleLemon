import { useContext, useState } from "react";
import { AddCardContext } from "../context/AddCradProvider";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoBagRemoveOutline } from "react-icons/io5";

const AddedCards = () => {
  const { addCard, removeCard, increaseQuantity, decreaseQuantity } =
    useContext(AddCardContext);
  const [activeTab, setActiveTab] = useState("cart");

  const subtotal = addCard.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * (item.quantity || 1),
    0
  );
  const delivery = 37.95;
  const orderTotal = subtotal + delivery;

  return (
    <>

    <hr />
    <div className="md:p-10 p-2 bg-[#233b34]">
      <div className="bg-white md:w-[70%] w-[100%] mx-auto shadow rounded-xl md:p-6 p-2">
        <div className="grid grid-cols-3">
          <button
            onClick={() => setActiveTab("cart")}
            className={`p-3 md:py-5 py-2 md:text-[18px] text-[14px] flex justify-center items-center gap-4 ${
              activeTab === "cart" ? " text-black" : " text-black"
            }`}
          >
            <div
            to="/cart"
            className="relative p-2 rounded-md bg-[#EDEFEE] text-[black]"
          >
            <IoBagRemoveOutline className="text-xl" />
            {addCard.length > 0 && (
                  <p className="absolute -top-3 -right-2 py-1 px-2 border border-[#495E57] rounded-full text-xs bg-[#F4CE14] text-red-600 font-bold">
                    {addCard.length}
                  </p>
                )}
          </div>
            Cart
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`p-3 md:py-5 py-2 md:text-[18px] text-[14px] rounded-tl-xl ${
              activeTab === "orders"
                ? "bg-[#233b34] text-white"
                : "bg-[#233b34] text-white"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("reservations")}
            className={`p-3 md:py-5 py-2 md:text-[18px] text-[14px] rounded-tr-xl ${
              activeTab === "reservations"
                ? "bg-[#233b34] text-white"
                : "bg-[#233b34] text-white"
            }`}
          >
            Reservations
          </button>
        </div>
        {activeTab === "cart" && (
          <>
            <div className="block md:hidden mt-2">
              {addCard.map((item, index) => (
                <div key={index} className="">
                  <div className="flex justify-between rounded-lg bg-[#f3f3f3] shadow-md p-2 mt-3">
                    <div className="w-[40%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 object-cover w-full rounded-md"
                      />
                    </div>
                    <div className="w-[55%] ">
                      <h2 className="text-[#495E57] text-[18px] font-medium">{item.title}</h2>
                      <h3 className="text-[#FE6D1A] text-[14px] pb-2">{item.price}</h3>
                      <div className="flex justify-between gap-2">
                        <div className="flex justify-evenly items-center w-full bg-[#DDDDDD] rounded-lg">
                          <button onClick={() => decreaseQuantity(item)} className="text-sm">
                            <FaMinus />
                          </button>
                          <span className="">{item.quantity || 1}</span>
                          <button onClick={() => increaseQuantity(item)} className="text-sm">
                            <FaPlus />
                          </button>
                        </div>
                        <button
                        onClick={() => removeCard(item)}
                        className="text-[]"
                      >
                        <RiDeleteBinLine />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:block hidden">
              {addCard.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-[#f0efef] shadow-md rounded-lg items-center justify-between p-4 my-4 border-b"
                >
                  <div className="md:w-[20%] w-[40%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center flex-wrap md:w-[70%] w-[50%]">
                    <div className="">
                      <h3 className="md:text-lg text-sm font-semibold">
                        {item.title}
                      </h3>
                    </div>


                    <div className="text-right">
                      <span className="md:text-lg text-sm font-semibold text-orange-500">
                        {item.price}
                      </span>
                    </div>

                    {/* Increment/Decrement Buttons */}
                    <div className="flex justify-evenly items-center px-6 w-32 bg-[#DDDDDD] rounded-md">
                      <button onClick={() => decreaseQuantity(item)} className="p-2">
                        <FaMinus />
                      </button>
                      <span className="">{item.quantity || 1}</span>
                      <button onClick={() => increaseQuantity(item)} className="p-2">
                        <FaPlus />
                      </button>
                    </div>

                    {/* Delete Icon */}
                    <div className="">
                      <button
                        onClick={() => removeCard(item)}
                        className="text-[#495E57] text-[24px]"
                      >
                        <RiDeleteBinLine />
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
          </>
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
    </>
  );
};

export default AddedCards;
