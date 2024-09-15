import React, { ReactNode } from "react";
import { Sitebar } from "./sitebar/Sitebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sitebar />
      <div className="w-full bg-[#fff] rounded-[22px] p-5">{children}</div>;
    </>
  );
};

export default Layout;
