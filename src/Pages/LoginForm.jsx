const LoginForm = () => {
  return (
    <>
    <hr />
    <div className="flex items-center justify-center min-h-screen bg-[#233b34]">
      <div className="w-full max-w-xl p-8 m-4 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <form className="space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="number">
              Number
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="text"
              id="number"
              name="number"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="otp">
              OTP
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="text"
              id="otp"
              name="otp"
              required
            />
          </div>
          <button
            className="w-full py-4 text-white bg-[#233b34] rounded-b-xl hover:bg-[#1a2d27] focus:outline-none focus:ring-2 focus:ring-gray-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
