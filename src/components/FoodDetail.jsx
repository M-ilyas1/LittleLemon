// src/components/FoodDetail.jsx
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { IoBagRemoveOutline } from 'react-icons/io5';


import map from "../assets/images/map.png";
import { AddCardContext } from "../context/AddCradProvider";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0); // State to manage the current tab
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch("/foodData.json");
        const data = await response.json();
        setFoodData(data);
        const foodItem = data.find((item) => item.id === parseInt(id));
        setFood(foodItem);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the food data:", error);
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [id]);

  const renderTabContent = () => {
    let itemsToShow = [];
    if (tab === 0) {
      itemsToShow = foodData.slice(0, 5); // First tab shows first 5 items
    } else if (tab === 1) {
      itemsToShow = foodData.slice(4, 10); // Second tab shows next 2 items
    } else if (tab === 2) {
      itemsToShow = foodData.slice(6, 10); // Third tab shows next 3 items
    }
  const { addToCard } = useContext(AddCardContext);


    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {itemsToShow.map((food, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Link to={`/food/${food.id}`}>
              <img src={food.image} alt={food.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="absolute bottom-2 left-2 flex items-center">
                <div className="w-full flex gap-4 justify-between items-center">
                  <div className="bg-[#dddddddc] flex text-white px-2 py-1 rounded-lg">
                    <div className="flex p-1 px-2 items-center mr-2">
                      {Array(food.rating).fill().map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <div className="text-sm font-semibold">{food.price}</div>
                  </div>
                  <div 
                    onClick={() => addToCard(food)} // Simplified onClick handler
                    className="p-2 mr-2 rounded-md bg-[#EDEFEE] text-[black] cursor-pointer"> {/* Added cursor-pointer for better UX */}
                    <IoBagRemoveOutline className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{food.title}</h3>
              <p className="text-gray-700">{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!food) {
    return <div>Food item not found!</div>;
  }
  
  return (
    <div className="bg-[#233b34] rounded-b-xl md:pb-10 pb-5">
    <hr />
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
      <div className="w-full col-span-1 mx-auto bg-[#e8e8e8] shadow-md rounded-2xl overflow-hidden border border-gray-300">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-60 object-cover p-4"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{food.title}</h3>
          <div className="bg-[#dedddd] p-2 rounded-md">
            <div className="flex items-center mb-2">
              <FaClock className="text-gray-500 mr-2" />
              <span className="">Now open until 23:59</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Monday - Sunday</span>
              <div className="ml-4 text-gray-700 bg-white p-1 px-4 rounded-lg">
                <span>{food.openingHours}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <FaMapMarkerAlt className="text-pink-600 mr-2" />
            <span className="text-gray-700">{food.address}</span>
          </div>
          <div className="mb-4">
            <img src={map} alt="" className="" />
          </div>
          <div className="my-2">
            <h4 className="font-semibold">
              Delivery fee from Rs. {food.deliveryFee}
            </h4>
            <p className="text-gray-700 text-sm">
              Delivery fee is charged based on time of the day and distance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Minimum order</h4>
            <p className="text-gray-700 text-sm">
              For orders below Rs. 249.00, we charge a small order fee.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#EDEFEE] rounded-xl md:p-4 p-2">
        <div className="mb-4 grid grid-cols-3">
          <button
            className={`px-4 py-4 md:text-[20px] text-[16px] rounded-tl-xl flex justify-center items-center gap-2 ${tab === 0 ? ' text-[#233b34]' : 'bg-[#233b34] text-gray-100'}`}
            onClick={() => setTab(0)}
          >
          <span className="text-[#F4CE14]"><FaFire/></span>
            Popular
          </button>
          <button
            className={`px-4 py-4 md:text-[20px] text-[16px]  ${tab === 1 ? ' text-[#233b34]' : 'bg-[#233b34] text-gray-100'}`}
            onClick={() => setTab(1)}
          >
            Deals & Discounts
          </button>
          <button
            className={`px-4 py-4 md:text-[20px] text-[16px] rounded-tr-xl ${tab === 2 ? ' text-[#233b34]' : 'bg-[#233b34] text-gray-100'}`}
            onClick={() => setTab(2)}
          >
            Similar
          </button>
        </div>
        {renderTabContent()}
      </div>
    </div>
    </div>
  );
};

export default FoodDetail;
