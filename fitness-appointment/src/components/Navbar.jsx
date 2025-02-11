import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import LazyLoad from "react-lazyload";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-100">
      <div className="flex items-center cursor-pointer font-black text-xl text-[#f97000]" onClick={() => navigate("/")}>
  
          <img
            onClick={() => navigate("/")}
            className="w-16 cursor-pointer"
            src={assets.logo}
            alt=""
          />
        
        <span>TrainWise</span>
      </div>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#f97000] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/trainers">
          <li className="py-1">ALL Trainers</li>
          <hr className="border-none outline-none h-0.5 bg-[#f97000] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#f97000] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#f97000] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <LazyLoad>
              <img
                className="w-8 rounded-full"
                src={userData.image}
                alt=""
              />
            </LazyLoad>
            <LazyLoad>
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            </LazyLoad>

            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="md:w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <LazyLoad>
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </LazyLoad>
        {/* --- mobile view --- */}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6 ">
          <p className="flex items-center font-black text-xl text-[#f97000]">
        <LazyLoad>
          <img
            className="w-16 cursor-pointer"
            src={assets.logo}
            alt=""
          />
        </LazyLoad>
        TrainWise
      </p>

            <LazyLoad>
              <img
                className="w-7"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt=""
              />
            </LazyLoad>
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/trainers">
              <p className="px-4 py-2 rounded inline-block">ALL TRAINERS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 




