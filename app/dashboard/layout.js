import "./dashboard.css";
import "remixicon/fonts/remixicon.css";
import SidePanelLinks from "./SidePanelLinks";

export const metadata = {
  title: "Dashboard",
  description: "Your dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid h-full">
        <SidePanelLinks />
        <div className="dark:bg-stone-950 lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">{children}</div>
      </div>
    </>
  );
}
