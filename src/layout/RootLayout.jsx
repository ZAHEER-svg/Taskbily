import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  // header
  // main
  // footer will be added here

  return (
    <>
      <nav class="relative container mx-auto py-6 px-24 nav hidden">
        <div class="flex items-center justify-between nav-div">
          <div class="pt-2 text-2xl text-bold">
            {/* <img src="src\assets\btm-banner.png" alt=""/> */}
            Taskbilly
          </div>

          {/* desktop menu */}
          <div class="hidden space-x-6 md:flex">
            <a href="#" class="hover:text-darkGrayishBlue">
              Features
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Contact
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Login
            </a>
          </div>

          <a
            href=""
            class="hidden hover:bg-[#f87171] pt-2 px-3 p-3 rounded-full text-white bg-[#ef4444] md:flex"
          >
            Get Started
          </a>

          {/* hamburger */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* mobile menu */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
            <a href="#">Get Started</a>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* footer */}

      <footer class="bg-black">
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2024, All Rights Reserved
            </div>

            <div>
              <img src="images/logo-white.svg" class="h-8" alt="" />
            </div>

            <div class="flex justify-center space-x-4">
              <a href="https://www.facebook.com/taskbily">
                <img src="src/assets/icon-facebook.svg" alt="" class="h-8" />
              </a>

              <a href="https://twitter.com/taskbily">
                <img src="src/assets/icon-twitter.svg" alt="" class="h-8" />
              </a>

              <a href="https://www.instagram.com/taskbily">
                <img src="src/assets/icon-instagram.svg" alt="" class="h-8" />
              </a>
            </div>
          </div>
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Getting started
              </a>
              <a href="#" class="hover:text-brightRed">
                Features
              </a>
              <a href="#" class="hover:text-brightRed">
                Pricing
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Login
              </a>
              <a href="#" class="hover:text-brightRed">
                Terms of use
              </a>
              <a href="#" class="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <form>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button class="px-6 py-2 text-white rounded-full bg-[#ef4444] hover:bg-[#f87171] focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
