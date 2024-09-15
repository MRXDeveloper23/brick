import React, { ReactNode } from "react";
import { Sitebar } from "./sitebar/Sitebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#203674] h-[100vh] py-6  p-8 ">
      <div className="flex h-full bg-[#071A50] rounded-[22px] ">
        <Sitebar />
        <div className="w-full bg-[#fff] rounded-[22px] p-5">{children}</div>;
      </div>
    </div>
  );
};

export default Layout;
