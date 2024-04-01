import { Outlet } from "react-router-dom";
import Header from "./Header"

export const MainLayout = () => {
    return (
      <>
        <Header />
        <div className="flex flex-col mt-2 pt-12 items-center content-center h-screen w-full">
          <div className="px-4 pt-8 md:pt-6 xl:pt-0 grow max-w-7xl w-full">
            <Outlet />
          </div>
        </div>
      </>
    )
  } 