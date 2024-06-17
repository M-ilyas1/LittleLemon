// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    rating: 5,
    review: "We had such a great time celebrating my grandmothers bitthday!",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    rating: 4,
    review: "Great atmosphere and friendly staff. Loved the experience.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Michael Johnson",
    rating: 5,
    review: "Fantastic food and excellent service. Will come back again!",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emily Davis",
    rating: 4,
    review: "Nice place with tasty dishes. The staff was very welcoming.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "James Brown",
    rating: 5,
    review: "A perfect dining experience. The food was out of this world!",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Anna Wilson",
    rating: 4,
    review: "Loved the food and the ambiance. Highly recommended!",
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonialsData[0]
  );
  const testimonialsListRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (testimonialsListRef.current && detailsRef.current) {
      detailsRef.current.style.height = `${testimonialsListRef.current.clientHeight}px`;
    }
  }, [selectedTestimonial]);

  return (
    <div className="w-[90%] mx-auto my-10 bg-[#ddddddc6] rounded-xl pl-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonials List */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-left">Testimonials</h2>
          <div className="flex md:justify-end">
            <div
              className="w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-4"
              ref={testimonialsListRef}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-500 mx-3 text-[20px] my-2"
                        />
                      ))}
                  </div>
                  <p className="text-gray-700 text-center">
                    {testimonial.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Testimonial Detail */}
        <div ref={detailsRef} className="flex md:justify-center justify-start ">
          <div className="bg-[#d8d8d8] flex flex-col justify-center items-center h-full md:w-[60%] md:mt-16 w-[90%] rounded-xl py-5">
            <div className="flex justify-center items-center mb-4">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="rounded-full w-[150px] mr-4"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold my-4 text-[32px]">
                {selectedTestimonial.name}
              </h3>
              <div className="flex">
                {Array(selectedTestimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-500 text-[30px] mt-2"
                    />
                  ))}
              </div>
              <p className="text-gray-700 text-[22px] w-[70%] text-center my-5">
                {selectedTestimonial.review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
