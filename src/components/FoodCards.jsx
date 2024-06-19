import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoBagRemoveOutline } from 'react-icons/io5';
import foodData from '../../public/foodData.json';
import { AddCardContext } from '../context/AddCradProvider';

const FoodCards = () => {
  const { addToCard } = useContext(AddCardContext);

  return (
    <div className="w-full">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {foodData.map((food, index) => (
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
    </div>
  );
};

export default FoodCards;
