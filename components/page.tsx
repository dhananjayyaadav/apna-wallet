import React from "react";
import Navbar from "./navbar";
import useAuth from "./auth";
const Page: React.FC = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <div className="py-[8vh] flex flex-1 flex-col">{children}</div>
    </div>
  );
};

export default Page;



