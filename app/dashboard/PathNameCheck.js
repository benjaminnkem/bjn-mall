"use client";
import { usePathName } from "next/navigation";

const useClientPathNameCheck = () => {
  const pathname = usePathName();
  return { pathname };
};

export default useClientPathNameCheck;
