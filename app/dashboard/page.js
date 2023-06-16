export default function DashboardHome() {
  return (
    <>
      <div>
        <div className="py-20 px-10 bg-stone-200">
          <h2 className="font-semibold">Welcome Back, Benjamin 😎</h2>
          <p className="text-sm">
            Last Seen: <span className="font-semibold text-stone-700">{new Date().toLocaleTimeString()}</span>
          </p>
        </div>

        <div className="main-dash-side mt-10 px-10">
          <div className="grid grid-cols-3 gap-2 -mt-5 px-5">
            <div className="bg-green-600 rounded-md shadow-md text-green-50 px-8 py-6 duration-200 hover:bg-green-500 hover:cursor-pointer select-none">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Customers</h3>
                <div className="flex justify-between items-center text-2xl">
                  <i className="ri-user-5-fill"></i>
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-600 rounded-md shadow-md text-green-50 px-8 py-6 duration-200 hover:bg-purple-500 hover:cursor-pointer select-none">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Orders</h3>
                <div className="flex justify-between items-center text-2xl">
                  <i className="ri-shopping-cart-fill"></i>
                  <p>114</p>
                </div>
              </div>
            </div>
            <div className="bg-red-600 rounded-md shadow-md text-green-50 px-8 py-6 duration-200 hover:bg-red-500 hover:cursor-pointer select-none">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Users</h3>
                <div className="flex justify-between items-center text-2xl">
                  <i className="ri-user-2-line"></i>
                  <p>1.2k</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 px-5">
            <div className="p-5 shadow-md max-w-5xl rounded-md">
              <h3 className="text-stone-900 font-bold text-lg">Recent Activities</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-center space-x-4">
                  <i className="ri-check-fill font-bold text-green-500 text-lg"></i>
                  <p>
                    Successfully delivered the product to{" "}
                    <span className="text-green-500 font-semibold border-b border-green-500 cursor-pointer">
                      Davicci
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="ri-truck-line font-bold text-yellow-500 text-lg"></i>
                  <p>
                    Delivery to{" "}
                    <span className="text-yellow-500 font-semibold border-b border-yellow-500 cursor-pointer">
                      Potler
                    </span>{" "}
                    still Pending
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="ri-close-line font-bold text-red-500 text-lg"></i>
                  <p>
                    <span className="text-red-500 font-semibold border-b border-red-500 cursor-pointer">Michael</span>{" "}
                    Cancelled his/her order before delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 shadow-md max-w-5xl rounded-md grid place-content-center text-center">
              <h3 className="text-xl font-semibold">Stock Statistics</h3>
              <p>Coming Soon.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
