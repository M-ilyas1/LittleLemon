import { useState } from "react";
import Biryani from "../assets/images/aaaa.png";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import foodData from "../../public/foodData.json";
import Button from "../components/Button";
import { BiExpandAlt } from "react-icons/bi";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section
        className="heroSection flex justify-center items-center py-36 px-4"
        style={{
          backgroundImage: `url(${Biryani})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <SearchBox />
      </section>
      <div className="w-[90%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Section */}
          <div className="bg-[#DDDDDD] p-5 rounded-lg md:border-gray-600">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            {/* Sort by */}
            <div className="mb-4 bg-white p-4 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Sort By</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Ratings</Button>
                <Button>Near</Button>
                <Button>Fastest delivery</Button>
                <Button>Distance</Button>
              </div>
              <div className="flex justify-end items-center mt-4">
                <button
                  className="md:hidden"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <BiExpandAlt /> : <BiExpandAlt />}
                </button>
              </div>
            </div>

            {/* Toggle button for mobile */}

            {/* Conditionally render the rest of the filters */}
            <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
              {/* Quick Filters */}
              <div className="mb-4 bg-white p-4 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Quick Filters</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Ratings 4+</Button>
                  <Button>Top Restaurant</Button>
                </div>
              </div>

              {/* Offers */}
              <div className="mb-4 bg-white p-4 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Offers</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Accepts vouchers</Button>
                  <Button>Free delivery</Button>
                  <Button>Deals</Button>
                </div>
              </div>

              {/* Cuisines */}
              <div className="mb-4 bg-white p-4 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Cuisines</h3>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <div className="flex flex-wrap gap-2">
                  <Button>American</Button>
                  <Button>BBQ</Button>
                  <Button>Chinese</Button>
                  <Button>Beverages</Button>
                  <Button>Cakes & Bakery</Button>
                  <Button>Biryani</Button>
                  <Button>Broast</Button>
                  <Button>Burgers</Button>
                  <Button>Continental</Button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4 bg-white p-4 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Price</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>$</Button>
                  <Button>$$</Button>
                  <Button>$$$</Button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <Button className="p-3 px-6 border-white text-[18px] border rounded-full">
                  Clear All
                </Button>
                <Button className="p-3 px-8 text-[#495E57] text-[18px] bg-[#F4CE14] border rounded-full">
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Food Cards Section */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {foodData.map((item, index) => (
              <Link
                to={`/food/${item.id}`}
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <div className="w-full flex gap-4 justify-between items-center">
                      <div className="bg-[#dddddddc] flex text-white px-2 py-1 rounded-lg">
                        <div className="flex p-1 px-2 items-center mr-2">
                          {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                              <FaStar key={i} className="text-yellow-500" />
                            ))}
                        </div>
                        <div className="text-sm font-semibold">
                          {item.price}
                        </div>
                      </div>
                      <div className="p-2 mr-2 rounded-md bg-[#EDEFEE] text-[black]">
                        <IoBagRemoveOutline className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
