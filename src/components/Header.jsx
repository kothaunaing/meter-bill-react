import { HistoryIcon, HomeIcon, MenuIcon, SettingsIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const homeActive = location.pathname === "/";
  const settingsActive = location.pathname === "/settings";
  const historyActive = location.pathname === "/history";

  return (
    <header className="sticky top-0 right-0 left-0 p-2 border-b border-b-base-300 bg-base-200 z-20">
      <div className="flex container mx-auto items-center justify-between">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="btn btn-circle sm:hidden"
          >
            <MenuIcon />
          </button>
          <h1 className="font-bold text-lg text-primary">
            Electricity Meter Bill
          </h1>
        </div>
        <ul className="hidden sm:flex menu menu-horizontal gap-1">
          <li>
            <Link to={"/"} className={clsx("", homeActive ? "active" : "")}>
              <HomeIcon />
              <span className="sm:hidden md:block">Home</span>
            </Link>
          </li>

          <li>
            <Link
              to={"/history"}
              className={clsx("", historyActive ? "active" : "")}
            >
              <HistoryIcon />
              <span className="sm:hidden md:block">History</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/settings"}
              className={clsx("", settingsActive ? "active" : "")}
            >
              <SettingsIcon />
              <span className="sm:hidden md:block">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>
  );
};

export default Header;
