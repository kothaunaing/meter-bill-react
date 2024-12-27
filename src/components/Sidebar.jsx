import { clsx } from "clsx";
import { HistoryIcon, HomeIcon, SettingsIcon, XIcon } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAppStore from "../store/useAppStore";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { handleOutsideClick } = useAppStore();
  const homeActive = location.pathname === "/";
  const settingsActive = location.pathname === "/settings";
  const historyActive = location.pathname === "/history";
  const sidebarRef = useRef(null);

  handleOutsideClick(sidebarRef, setIsSidebarOpen);

  return (
    <div
      className={clsx(
        "z-20 sm:hidden fixed transition-[inset] top-0 right-0 duration-300 bg-black/40",
        !isSidebarOpen ? "left-[-100%]" : "inset-0"
      )}
    >
      <div
        ref={sidebarRef}
        className={clsx(
          "w-[300px] transition-[left] absolute top-0 bottom-0 -left-[100%] p-2 border-r border-r-base-300 bg-base-200",
          isSidebarOpen && "left-0"
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">Meter Bill</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="btn btn-circle"
          >
            <XIcon />
          </button>
        </div>
        <div>
          <ul className="menu menu-vertical gap-1">
            <li>
              <Link
                onClick={() => setIsSidebarOpen(false)}
                to={"/"}
                className={clsx(homeActive ? "active" : "")}
              >
                <HomeIcon />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setIsSidebarOpen(false)}
                to={"/history"}
                className={clsx("", historyActive ? "active" : "")}
              >
                <HistoryIcon />
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsSidebarOpen(false)}
                to={"/settings"}
                className={clsx("", settingsActive ? "active" : "")}
              >
                <SettingsIcon />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
