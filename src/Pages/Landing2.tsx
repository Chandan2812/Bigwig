import { useState } from "react";
import ham from "../assets/nav.png";
import bulb from "../assets/home-icon-1.gif";
import logo from "../assets/homepage-mobile.gif";
import { Link } from "react-router-dom";

function Landing2() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col justify-between w-full h-screen bg-[#FF3D48] relative text-white overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between w-full px-4 pt-6 absolute top-0 z-10">
        <img
          src={ham}
          alt="Menu"
          className="w-10 h-10 cursor-pointer bg-white rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        />
        <img src={bulb} alt="Bulb" className="w-1/2 -mt-4 -mr-10" />
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <img
          src={logo}
          alt="Logo"
          className="w-full max-h-full object-contain"
        />
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-20 left-4 right-4 text-white rounded p-4 z-20 bg-[#FF3D48]">
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/agency">Agency</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/strategy">Strategy</Link>
            </li>
            <li>
              <Link to="/bigwig">Y Bigwig</Link>
            </li>
            <li>
              <Link to="/things-to-do">Things to Do</Link>
            </li>
            <li>
              <Link to="/method-to-madness">Method to Madness</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="w-full flex absolute bottom-0 left-0">
        <button className="w-1/2 py-3 bg-black text-white border-r border-white">
          Call Me
        </button>
        <button className="w-1/2 py-3 bg-black text-white">
          I'm Interested
        </button>
      </div>
    </div>
  );
}

export default Landing2;
