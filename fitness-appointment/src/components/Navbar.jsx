import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import LazyLoad from "react-lazyload";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div>
      
    </div>
  )
}

export default Navbar;
