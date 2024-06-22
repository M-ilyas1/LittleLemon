import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Anniversary');
  const [date, setDate] = useState('');

  // Error state
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone is required";
    if (!cardNumber) errors.cardNumber = "Card Number is required";
    if (!guests) errors.guests = "Number of guests is required";
    if (!date) errors.date = "Date is required";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <hr />
      {isSubmitted ? (
        <ThankYouMessage />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#233b34] p-4">
          <div className="p-8 rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-300">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <form className="space-y-4">
                  <div className="bg-white p-3 rounded-lg">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </form>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Payment</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 pb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full p-2 outline-none border-2 border-[#233b34] rounded-md"
                      placeholder="•••• •••• •••• 1289"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full p-2 outline-none border-2 border-[#233b34] rounded-md"
                        placeholder="Expiry"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full p-2 outline-none border-2 border-[#233b34] rounded-md"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="bg-white p-3 rounded-lg">
                  <label className="block text-gray-700">Number of Guests</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                  {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <label className="block text-gray-700">Occasion</label>
                  <div className="relative">
                    <select
                      className="w-full border bg-gray-100 outline-none p-4 py-6 shadow-md rounded-md appearance-none"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                    >
                      <option>Anniversary</option>
                      <option>Birthday</option>
                      <option>Meeting</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <label className="block text-gray-700">Time & Date</label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-[60%] py-4 px-4 bg-[#F4CE14] text-[#333333] font-medium hover:bg-yellow-600 rounded-md"
                  >
                    Reserve a Table
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ThankYouMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md m-4 bg-white rounded-xl shadow-md">
      <div className='mt-10'>

        <div className="flex justify-center items-center my-4">
          <FaCheckCircle className="text-6xl text-black" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2">Thank You for Reservation..</h2>
        <p className="text-center text-gray-600 mb-6">
          You can browse for more items or you can see your Reservations in your profile.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-4 text-white bg-[#233b34] rounded-b-xl hover:bg-[#1b2e28] focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Back To Home
        </button>
      </div>
      </div>
    </div>
  );
};

export default ReservationForm;
