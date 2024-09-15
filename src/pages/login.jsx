import TaskbilyH from '../assets/Taskbily/Taskbily no background_Artboard 5 copy 3.png';
export const Login = () => {
  return (
    <section className="flex py-6 px-3  h-screen w-full bg-[#FFF] md:px-6 lg:px-9 justify-center">


      {/* login form */}
      <div className="bg-[#fff] rounded-lg p-8 shadow-lg md:border w-full md:w-1/2 ">

        <div className="text-3xl font-bold mb-4 text-center sm:px-6 md:px-12">Taskbilly</div>
        <div className="text-xl font-bold mb-8 text-gray-600 text-center sm:px-6 md:px-12">Sign in</div>

        <div className="mb-4 ">
          <label
            htmlFor="email"
            className="block mb-1 text-gray-700 font-semibold "
          >
         
          </label>
          <input
            type="email"
            id="email"
            className="border border-pink-300 rounded px-3 py-2 h-20 w-full focus:outline-none focus:border-pink-500"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-gray-700 font-semibold"
          >
          
          </label>
          <input
            type="password"
            id="password"
            className="border border-pink-300 rounded px-3 py-2 h-20 w-full focus:outline-none focus:border-pink-500"
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <a href="#" className="text-pink-600 text-sm font-semibold">
            Forgot password?
          </a>
        </div>

        <button className="bg-[#EF4444] text-white py-2 px-4 rounded-full w-full mb-4">
          Sign in
        </button>

        <div className="mb-4 text-center">or</div>

        <button className="bg-[#EF4444] text-white py-2 px-4 rounded-full w-full">
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

