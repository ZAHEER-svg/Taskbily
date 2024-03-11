export const Login = () => {
  return (
    <section className="flex py-6 px-3  h-screen w-full bg-[#FFFDFA] md:px-6 lg:px-9 justify-center">
      {/* left cta */}
      <div className="hidden md:flex flex-col items-center w-1/3 mr-24 text-black justify-center">
        <h1 className="text-3xl font-bold mb-4">Get paid like the pros</h1>
        <p className="block mb-1 text-gray-700 font-semibold">
          Get your customers every way to pay with Taskbily
        </p>
        <ul className="mt-6 list-disc text-gray-700 text-sm">
          <li>Add a secure "pay now" button to invoices</li>
          <li>Accept credit card, bank transfers, or apple pay</li>
          <li>Get paid in 1-2 business days</li>
        </ul>
      </div>

      {/* login form */}
      <div className="md:bg-blue-50 rounded-lg p-8 shadow-lg md:border w-full md:w-1/3">
        <div className="text-3xl font-bold mb-4">Taskbilly</div>
        <div className="text-xl font-bold mb-8 text-gray-600">Sign in</div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-gray-700 font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-blue-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Your email..."
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-gray-700 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-blue-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Your password..."
          />
        </div>

        <div className="mb-4">
          <a href="#" className="text-blue-600 text-sm font-semibold">
            Forgot password?
          </a>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-full w-full mb-4">
          Sign in
        </button>

        <div className="mb-4 text-center">or</div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-full w-full">
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

