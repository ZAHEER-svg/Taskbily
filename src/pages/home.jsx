import "../styles/home.css";
import { BsChatSquareQuote } from "react-icons/bs";

export const Home = () => {
  return (
    <>
      <section className="">
        <div class="container flex flex-col-reverse mx-auto px-6 mt-10 space-y-0 space-x-24 md:flex-row md:space-y-0 md:justify-center">
          <div class="flex flex-col mb-32 space-y-6 md:w-1/3">
            <h1 class="mx-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products.
            </h1>
            <p class="max-w-sm text-center text-[#78716c] md:text-left">
              Taskbilly makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>

            <div class="flex flex-col justify-between">
              <form>
                <div class="flex flex-col space-y-3">
                  <input
                    type="text"
                    class="flex-1 px-4 py-2 rounded-md focus:outline-none border border-[#fca5a5]"
                    placeholder="johndoe@example.com"
                  />
                  <input
                    type="text"
                    class="flex-1 px-4 py-2 rounded-md focus:outline-none border border-[#fca5a5] w-full"
                    placeholder="password"
                  />

                  <div class="flex justify-center md:justify-start">
                    <a
                      href=""
                      class="hover:bg-[#f87171] pt-2 px-3 p-3 text-center rounded-full text-white bg-[#ef4444] w-1/2"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="w-full md:w-1/2 hidden md:block">
            <img src="src\assets\mock-banner.svg" alt="" />
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section id="testimonials">
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 class="text-4xl font-bold">Testimonials</h2>
          <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div class="flex flex-col items-center bg-veryLightGray space-y-6 rounded-lg p-6 max-w-sm md:w-1/3">
              <BsChatSquareQuote className="text-3xl md:text-5xl text-[#f87171]" />
              <h5 class="text-lg font-bold">Megan Lee</h5>
              <p class="text-sm text-[#a8a29e]">
                “I was skeptical at first, but after using the application for a
                few weeks, I'm sold! It's incredibly intutitve and user
                friendly.”
              </p>
            </div>
            <div class="md:flex flex-col items-center bg-veryLightGray space-y-6 rounded-lg p-6 max-w-sm hidden md:w-1/3">
              <BsChatSquareQuote className="text-3xl md:text-5xl text-[#f87171]" />
              <h5 class="text-lg font-bold">Jacob Thompson</h5>
              <p class="text-sm text-[#57534e]">
                “I've tried a lot of productivity tools, but this one stands
                out. It has all the features I need and none of the clutter.”
              </p>
            </div>

            <div class="md:flex flex-col items-center bg-veryLightGray space-y-6 rounded-lg p-6 max-w-sm hidden md:w-1/3">
              <BsChatSquareQuote className="text-3xl md:text-5xl text-[#f87171]" />
              <h5 class="text-lg font-bold">Maria Rodriguez</h5>
              <p class="text-sm text-[#57534e]">
                “As a small business owner, the application has been a
                game-changer. It saves me so much time and keeps me organized.”
              </p>
            </div>

            <div class="max-w-sm md:flex flex flex-col items-center bg-veryLightGray space-y-6 rounded-lg p-6 md:w-1/3">
              <BsChatSquareQuote className="text-3xl md:text-5xl text-[#f87171]" />

              <h5 class="text-lg font-bold">Samantha Patel</h5>
              <p class="text-sm text-[#57534e]">
                “I appreciate the attention to detail in the design of the
                application. It's clear that the developers put a lot of thought
                into the user experience.”
              </p>
            </div>
          </div>

          <div class="my-12">
            <a
              href=""
              class="hover:bg-[#f87171] pt-2 px-6 p-3 rounded-full text-white bg-[#ef4444]"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* features */}

      <section className="md:mt-40" id="features">
        <div class="container flex flex-col md:justify-center md:flex-row px-4 mx-auto md:mx-0 mt-10 space-y-12 md:space-y-0">
          <div class="flex flex-col md:w-1/3">
            <h2 class="max-w-md text-4xl font-bold text-center mb-12 md:text-left">
              What makes us different?
            </h2>
            <p class="text-center md:text-left">
              Taskbilly provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>

          <div class="flex flex-col space-y-8 md:w-1/2 ">
            <div class="flex flex-col sapce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-veryPaleRed md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-[#f87171]">
                    01
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Meet Your Business Needs
                  </h3>
                </div>
              </div>
              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Meet Your Business Needs
                </h3>

                <p class="text-[#57534e] mt-4">
                  Manage your projects and your talent in a single system,
                  resulting in empowered teams, satisfied clients, and increased
                  profitability. Keep a track of all your projects in most
                  simple way. Assign tasks to project members and track the
                  status. Add members to your projects and keep them in sync
                  with the progress.
                </p>
              </div>
            </div>

            <div class="flex flex-col sapce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-veryPaleRed md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-[#f87171]">
                    02
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Analyse Your Workflow
                  </h3>
                </div>
              </div>
              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Analyse Your Workflow
                </h3>

                <p class="text-[#57534e] mt-4">
                  Reports section to analyse what's working and what's not for
                  your business It Shows how much you earned and how much you
                  spent. Ticket report shows you Open vs Closed tickets. It
                  creates task report to track completed vs pending tasks.
                </p>
              </div>
            </div>

            <div class="flex flex-col sapce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-veryPaleRed md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-[#f87171]">
                    03
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Manage your support tickets efficiently
                  </h3>
                </div>
              </div>
              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Manage your support tickets efficiently
                </h3>

                <p class="text-[#57534e] mt-4">
                  Whether someone's internet is not working, someone is facing
                  issue with housekeeping or need something regarding their work
                  they can raise a ticket for all their problems. Admin can
                  assign the tickets to respective department agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="bg-[#ef4444] mt-24">
        <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>

          <div>
            <a
              href="#"
              class="p-3 px-6 pt-2 text-[#ef4444] bg-white rounded-full shadow-2xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

//                 <button class="px-6 py-2 text-white rounded-full bg-black hover:bg-crimson focus:outline-none">
//   Go
// </button>
