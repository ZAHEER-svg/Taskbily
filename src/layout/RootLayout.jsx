import { Outlet } from "react-router-dom";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

export const RootLayout = () => {
  // header
  // main
  // footer will be added here

  return (
    <>
    {/* header */}
      <Header />
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <Footer />

      {/* <footer className="bg-black">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2024, All Rights Reserved
            </div>

            <div>
              <img src="images/logo-white.svg" className="h-8" alt="" />
            </div>

            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/taskbily">
                <img src="src/assets/icon-facebook.svg" alt="" className="h-8" />
              </a>

              <a href="https://twitter.com/taskbily">
                <img src="src/assets/icon-twitter.svg" alt="" className="h-8" />
              </a>

              <a href="https://www.instagram.com/taskbily">
                <img src="src/assets/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Getting started
              </a>
              <a href="#" className="hover:text-brightRed">
                Features
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Login
              </a>
              <a href="#" className="hover:text-brightRed">
                Terms of use
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-[#ef4444] hover:bg-[#f87171] focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};
