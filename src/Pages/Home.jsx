import FoodCards from "../components/FoodCards";
import HeroSection from "../components/HeroSection";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import assets from "../assets/images/index";
import Testimonials from "../components/Testimonials";
import Biryani from "../assets/images/aaaa.png";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <div className="w-[90%] mx-auto my-8">
          <div className="my-8">
            <h1 className="text-[30px] mb-8 font-semibold">Top Recipes</h1>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full">
                  <img src={assets.dish1} className="rounded-full w-6" alt="" />
                  <h3>Salad</h3>
                </div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full">
                  <img src={assets.dish2} className="rounded-full w-6" alt="" />
                  <h3>Pasta</h3>
                </div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full">
                  <img src={assets.dish3} className="rounded-full w-6" alt="" />
                  <h3>Drinks</h3>
                </div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full">
                  <img src={assets.dish4} className="rounded-full w-6" alt="" />
                  <h3>Breakfast</h3>
                </div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full">
                  <img src={assets.dish5} className="rounded-full w-6" alt="" />
                  <h3>Beaf</h3>
                </div>
              </div>
              <div className="flex gap-6">
                <FaArrowLeft />
                <FaArrowRight />
              </div>
            </div>
          </div>
          <FoodCards />
        </div>
      </div>
      <div className="w-full my-10">
        <div className="w-[90%] mx-auto md:py-14 py-2 bg-yellow-700 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl"
        style={{ 
          backgroundImage: `url(${Biryani})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}>
          <div className="md:p-5 p-3 flex md:justify-start justify-center py-10 ">
            <div className="text-center md:w-[55%] w-[100%] bg-[#233b34] rounded-xl md:py-24 py-4 px-6">
              <h2 className="text-[#F4CE14] font-medium md:text-[40px] text-[30px]">
                Little Lemon
              </h2>
              <h3 className="text-white mb-3 text-[25px]">Chicago</h3>
              <p className="text-white md:text-[14px] text-[12px] text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.{" "}
              </p>
            </div>
          </div>
          <div className="relative p-5 flex md:justify-end justify-center">
            <div className="text-center md:w-[70%] w-[60%] flex relative top-32">
              <img
                src="https://s3-alpha-sig.figma.com/img/c713/f61a/e83464464c563671ba5815410fcaa467?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiDq4QKLnsUYHpXxruU~RF6Nr7WWCBpYfYUlZL9l0LTn4kbb7fXBQ~3CnJTdvqzrbeby~SHJ9gjs1jZAQ65VKc5iL0TsMcxR96jTbCkZSvtJvwLB~Zcw7JVB-JZ8GLkb~g8xZmuxGPtWd1nxoiblScNn0ejDRx1yzKY4m8Lk78J28p5zq4yjQvJVRu3RLBVqvTczF2W5dLGg5gSYFvVwKFk8gWRdpKpCptpgCLv5YwNfMOXFXLQB4RLU5Qa1s-JqAJqv8geJR-2lPo0uR4LZinsGY1aHlzNbai0kRx0ibsB0JVieKFdyaIZ1y10fUHKRTx3I2RmNIxyxN4Idcw2t5g__"
                alt=""
                className="hidden lg:block absolute w-64 left-44 -top-14 rounded-xl"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/0765/9890/37a27533cd70267af5a245ea52915e7e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMhhXnw9f8K9Z6flslK~akck-9qzgtG0L6k6Y94VMY0U3wP5kIgtXAJvLFM9eC~jnb8xs~f-65WCuCVk~1dKk7RPKseSR~H-rYNY2TaEzRCn215-QZd-FJzE0OD2Y090MyikrglPlzpbgogd0L7Z7~ntMQYWtiIgXcadta~cD0BGOaM0e0KOOBj9QRVmEye1IJkFOea2fp8ECl6qgWBoyxcz11DqBrpTzQ1IJkV5Q5zBYzcizksCFxZwHN-SpHK6RFzhX-8yHyyrPg3UzedXvu4l03phZ575OMlIgqUHZ6gVv~wr65rFo6FfmFX4t-iaitSya0WbdNOTIgz2HnQ1SA__"
                alt=""
                className="hidden lg:block absolute w-64 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
