import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className=" min-h-lvh bg-mainColor flex justify-center items-center">
      <div className="text-center text-white w-[60%]">
        <h2 className=" text-white  font-bold  text-[2.5rem] ">
          ABOUT COMPONENT
        </h2>
        <i className="fa-solid fa-star  relative">
          <div className=" absolute  before:content-[''] before:block before:w-20 before:h-1 before:bg-white  top-[7px] right-[30px]"></div>
          <div className=" absolute  after:content-[''] after:block after:w-20 after:h-1 after:bg-white  top-[7px] left-[30px]"></div>
        </i>
        <div className="  flex flex-wrap">
          <p className=" w-1/2  max-md:w-full p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className=" w-1/2 max-md:w-full p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
