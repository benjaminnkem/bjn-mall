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

        <div className="main-dash-side grid gap-4 mt-10 px-10">
          <div>
            <div className="p-10 shadow-2xl rounded-md"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 -mt-5 px-5">
            <div className="bg-green-500 rounded-md text-green-50 px-8 py-6 product-cards">
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-semibold">Customers</h3>
                <div className="flex justify-between items-center text-2xl">
                  <i className="ri-user-5-fill"></i>
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-500 rounded-md text-green-50 px-8 py-6 product-cards">
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-semibold">Orders</h3>
                <div className="flex justify-between items-center text-2xl">
                  <i className="ri-user-5-fill"></i>
                  <p>114</p>
                </div>
              </div>
            </div>
            <div className="bg-red-500 rounded-md text-green-50 p-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
