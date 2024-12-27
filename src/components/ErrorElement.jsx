import { HomeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <div>
        <p className="font-bold text-xl">404 | No Page Found</p>
        <Link to={"/"} className="btn btn-sm mt-2">
          <HomeIcon />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
