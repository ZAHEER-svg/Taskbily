import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  // header
  // main
  // footer will be added here

  return (
    <>
      <div className="p-4 bg-gray-300">
        <p className="text-2xl text-[#1518a5]">Taskbily</p>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};
