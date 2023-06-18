"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Loading = () => {
  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname]);

  return null;
};

export default Loading;
