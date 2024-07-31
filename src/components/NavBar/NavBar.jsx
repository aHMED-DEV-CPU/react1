import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
export default function NavBar() {
  const [toggleVisible, setToggleVisible] = useState(false);

  const closeToggle = () => {
    setToggleVisible(!toggleVisible);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-10 bg-[#2c3e50] text-white   fixed top-0 right-0 left-0  transition-all duration-500 ${
        scroll ? "py-2" : "py-6"
      }`}
      id="Nav"
    >
      <div className="container  flex justify-between  items-center  py-2  ">
        <h1 className="  text-2xl  font-bold min-[992px]:text-3xl  ">
          <Link to={""}>START FRAMEWORK</Link>
        </h1>
        <div
          className=" border-[1px]  border-black/15  px-2 py-1 cursor-pointer  hidden max-medium:block  rounded "
          onClick={closeToggle}
        >
          <img
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"
            alt=""
            className=" w-8  "
          />
        </div>
        <ul className=" flex   max-medium:hidden">
          <li className=" mx-8  uppercase font-semibold  text-lg ">
            <NavLink to={"about"}>about</NavLink>
          </li>
          <li className=" mx-8 uppercase font-semibold text-lg ">
            <NavLink to={"portfolio"}>portfolio</NavLink>
          </li>
          <li className=" mx-8 uppercase font-semibold  text-lg">
            <NavLink to={"contact"}>contact</NavLink>
          </li>
        </ul>
      </div>
      <ul
        className={`   min-[992px]:hidden container ${
          toggleVisible ? "" : "hidden"
        }`}
      >
        <li className=" mx-8  uppercase font-semibold  text-lg  ms-0 my-4">
          <NavLink to={"about"}>about</NavLink>
        </li>
        <li className=" mx-8 uppercase font-semibold text-lg ms-0 my-4">
          <NavLink to={"portfolio"}>portfolio</NavLink>
        </li>
        <li className=" mx-8 uppercase font-semibold  text-lg ms-0 my-4">
          <NavLink to={"contact"}>contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
//
