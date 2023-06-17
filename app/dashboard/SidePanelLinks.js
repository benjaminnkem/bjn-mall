"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidePanelLinks = () => {
  const currentPath = usePathname();

  return (
    <div className="mt-5">
      <Link href="/dashboard">
        <div
          className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-100 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none ${
            currentPath === "/dashboard" ? "border-l-2 border-stone-50" : ""
          }`}
        >
          <i className="ri-home-3-fill text-2xl"></i>
          <p className="hidden md:inline-block">Dashboard</p>
        </div>
      </Link>
      <Link href="/dashboard/products">
        <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-100 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
          <i className="ri-shopping-cart-fill text-2xl"></i>
          <p className="hidden md:inline-block">Products</p>
        </div>
      </Link>
      <Link href="/dashboard/users">
        <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-100 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
          <i className="ri-user-3-fill text-2xl"></i>
          <p className="hidden md:inline-block">Users</p>
        </div>
      </Link>
      <Link href="/dashboard/settings">
        <div
          className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-100 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none ${
            currentPath === "/dashboard/settings" ? "border-l-2 border-stone-50" : ""
          }`}
        >
          <i className="ri-settings-3-fill text-2xl"></i>
          <p className="hidden md:inline-block">Account</p>
        </div>
      </Link>
      <Link href="#">
        <div className="grid grid-cols-3 hover:shadow-md items-center px-6 duration-100 hover:bg-stone-800 dark:hover:bg-stone-700 py-3 select-none">
          <i className="ri-information-fill text-2xl"></i>
          <p className="hidden md:inline-block">About</p>
        </div>
      </Link>
    </div>
  );
};

export default SidePanelLinks;
