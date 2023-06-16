import Image from "next/image";
import "./dashboard.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description: "Your dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div id="dash-body" className="grid">
        <aside className="overflow-x-hidden bg-stone-900 text-stone-50 h-screen">
          <div className="px-6">
            <div className="flex items-center justify-between py-3">
              <h1 className="text-2xl">BjnMall</h1>
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
              <div className="grid grid-cols-3 items-center px-6 duration-200 hover:bg-stone-800 py-3 select-none border-l-2 border-stone-50">
                <i className="ri-home-3-fill text-2xl"></i>
                <p>Dashboard</p>
              </div>
            </Link>
            <Link href="/dashboard/products">
              <div className="grid grid-cols-3 items-center px-6 duration-200 hover:bg-stone-800 py-3 select-none border-stone-50">
                <i className="ri-shopping-cart-fill text-2xl"></i>
                <p>Products</p>
              </div>
            </Link>
            <Link href="/dashboard/users">
              <div className="grid grid-cols-3 items-center px-6 duration-200 hover:bg-stone-800 py-3 select-none border-stone-50">
                <i className="ri-user-3-fill text-2xl"></i>
                <p>Users</p>
              </div>
            </Link>
            <Link href="/dashboard/settings">
              <div className="grid grid-cols-3 items-center px-6 duration-200 hover:bg-stone-800 py-3 select-none border-stone-50">
                <i className="ri-settings-3-fill text-2xl"></i>
                <p>Account</p>
              </div>
            </Link>
            <Link href="#">
              <div className="grid grid-cols-3 items-center px-6 duration-200 hover:bg-stone-800 py-3 select-none border-stone-50">
                <i className="ri-information-fill text-2xl"></i>
                <p>About</p>
              </div>
            </Link>
          </div>
        </aside>
        {children}
      </div>
    </>
  );
}
