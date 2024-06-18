import SearchBox from "./SearchBox";
import Rectangle from "../assets/images/Rectangle.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-full md:py-20 py-8 bg-[#233b34] flex justify-center items-center">
        <div className="w-[90%] grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-start md:justify-center">
            <h1 className="text-[#F4CE14] font-medium text-[50px] ">
              Little Lemon{" "}
            </h1>
            <h2 className="text-white mb-3 text-[25px]">Chicago</h2>
            <p className="md:w-[55%] w-[80%] mb-6 text-[14px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <SearchBox />
          </div>
          <div className="flex justify-center md:justify-end items-center md:items-end">
            <div
              className="mt-5 h-[350px] md:h-[440px] md:w-[380px] w-[330px] md:border-[2px] border-[5px] border-[#F4CE14] rounded-3xl bg-cover bg-center text-center flex flex-col justify-end items-center"
              style={{ backgroundImage: `url(${Rectangle})` }}
            >
              <button className="mb-6 p-4  px-6 bg-[#DDDDDD] rounded-full">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
