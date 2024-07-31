import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="  min-h-lvh   flex justify-center items-center bg-mainColor">
      <div className="  ">
        <img
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt=""
          className=" w-64 mx-auto"
        />
        <div className=" text-white text-center">
          <h2 className="  text-4xl    font-bold mt-6  ">START FRAMEWORK</h2>

          <i className="fa-solid fa-star  relative">
            <div className=" absolute  before:content-[''] before:block before:w-20 before:h-1 before:bg-white  top-[7px] right-[30px]"></div>
            <div className=" absolute  after:content-[''] after:block after:w-20 after:h-1 after:bg-white  top-[7px] left-[30px]"></div>
          </i>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
