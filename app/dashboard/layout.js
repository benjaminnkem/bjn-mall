import Image from "next/image";
import Link from "next/link";
import "./dashboard.css";
import "remixicon/fonts/remixicon.css";
import PathNameCheck from "./PathNameCheck";

export const metadata = {
  title: "Dashboard",
  description: "Your dashboard",
};

export default function DashboardLayout({ children }) {
  const pathname = <PathNameCheck />;
  if (pathname === "/dashboard") {
    console.log(pathname);
    console.log("here");
  } else {
    console.log(pathname);
    console.log("nope");
  }
  return (
    <>
      <div className="grid h-full">
        <aside className="overflow-x-hidden bg-stone-900 dark:bg-stone-800 text-stone-50 h-full fixed lg:w-[320px] md:w-[280px] w-[80px] duration-200">
          <div className="px-6">
            <div className="flex items-center justify-between py-3">
              <h1 className="text-2xl hidden sm:inline-block">BjnMall</h1>
              <i className="ri-menu-2-line text-2xl hover:cursor-pointer"></i>
            </div>
            <div className="text-center mt-3">
              <div className="overflow-hidden">
                <Image
                  src={`/images/admin1.jpg`}
                  alt="Admin Pic"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                  draggable="false"
                ></Image>
              </div>
              <p className="text-stone-200 text-xs font-semibold mt-3">Admin Name</p>
            </div>
          </div>

          <div className="mt-5">
            <Link href="/dashboard">
              <div
                className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-200 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none ${
                  pathname === "/dashboard" ? "border-l-2 border-stone-50" : "border-l-2 border-stone-50"
                }`}
              >
                <i className="ri-home-3-fill text-2xl"></i>
                <p className="hidden md:inline-block">Dashboard {pathname}</p>
              </div>
            </Link>
            <Link href="/dashboard/products">
              <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-200 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
                <i className="ri-shopping-cart-fill text-2xl"></i>
                <p className="hidden md:inline-block">Products</p>
              </div>
            </Link>
            <Link href="/dashboard/users">
              <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-200 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
                <i className="ri-user-3-fill text-2xl"></i>
                <p className="hidden md:inline-block">Users</p>
              </div>
            </Link>
            <Link href="/dashboard/settings">
              <div
                className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-200 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none ${
                  pathname === "/dashboard/settings" ? "border-l-2 border-stone-50" : ""
                }`}
              >
                <i className="ri-settings-3-fill text-2xl"></i>
                <p className="hidden md:inline-block">Account</p>
              </div>
            </Link>
            <Link href="#">
              <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-200 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
                <i className="ri-information-fill text-2xl"></i>
                <p className="hidden md:inline-block">About</p>
              </div>
            </Link>
          </div>

          <div className="sticky bottom-2 mt-10 text-center">
            <p className="text-xs text-stone-500 bottom-3 left-1/2 right-1/2">Created by Benjamin Nkem</p>
          </div>
        </aside>

        <div className="dark:bg-stone-950 lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">{children}</div>
      </div>
    </>
  );
}
