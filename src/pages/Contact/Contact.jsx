import { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  let [showLabel1, setShowLabel1] = useState(false);
  let [showLabel2, setShowLabel2] = useState(false);
  let [showLabel3, setShowLabel3] = useState(false);
  let [showLabel4, setShowLabel4] = useState(false);

  useEffect(() => {
    let input1 = document.querySelector("#userName");

    input1.addEventListener("input", () => {
      if (input1.value.length > 0) {
        setShowLabel1(true);
      } else {
        setShowLabel1(false);
      }
    });
  }, [showLabel1]);
  useEffect(() => {
    let input2 = document.querySelector("#userAge");

    input2.addEventListener("input", () => {
      if (input2.value.length > 0) {
        setShowLabel2(true);
      } else {
        setShowLabel2(false);
      }
    });
  }, [showLabel2]);
  useEffect(() => {
    let input3 = document.querySelector("#userEmail");

    input3.addEventListener("input", () => {
      if (input3.value.length > 0) {
        setShowLabel3(true);
      } else {
        setShowLabel3(false);
      }
    });
  }, [showLabel3]);
  useEffect(() => {
    let input4 = document.querySelector("#userPassword");

    input4.addEventListener("input", () => {
      if (input4.value.length > 0) {
        setShowLabel4(true);
      } else {
        setShowLabel4(false);
      }
    });
  }, [showLabel4]);

  return (
    <div className=" h-lvh">
      <h2 className="  text-3xl md:text-4xl pt-[115px] text-center font-bold text-[#212529] py-6 uppercase ">
        contact section
      </h2>
      <div className=" flex justify-center mb-10">
        <i className="fa-solid fa-star  relative">
          <div className=" absolute  before:content-[''] before:block before:w-20 before:h-1 before:bg-[#212529]  top-[7px] right-[30px]"></div>
          <div className=" absolute  after:content-[''] after:block after:w-20 after:h-1 after:bg-[#212529]  top-[7px] left-[30px]"></div>
        </i>
      </div>
      <div className=" container  py-9   z-[1] relative">
        <div className="   rowTail justify-center  relative my-10">
          <label
            htmlFor="userName"
            className={`absolute text-mainColor   md:left-[17.5%] left-[2.5%] transition-all duration-500 ${
              showLabel1 ? "-top-7" : "top-0"
            }`}
          >
            userName :
          </label>
          <input
            type="text"
            id="userName"
            className=" w-full md:w-4/6  border-b rounded p-2 focus-visible:outline-0 z-10"
            placeholder="userName"
          />
        </div>
        <div className="   rowTail justify-center  relative my-10">
          <label
            htmlFor="userAge"
            className={`absolute text-mainColor   md:left-[17.5%] left-[2.5%] transition-all duration-500 ${
              showLabel2 ? "-top-7" : "top-0"
            }`}
          >
            userAge :
          </label>
          <input
            type="text"
            id="userAge"
            className=" w-full md:w-4/6  border-b rounded p-2 focus-visible:outline-0 z-10"
            placeholder="userAge"
          />
        </div>

        <div className="   rowTail justify-center  relative my-10">
          <label
            htmlFor="userEmail"
            className={`absolute text-mainColor   md:left-[17.5%] left-[2.5%] transition-all duration-500 ${
              showLabel3 ? "-top-7" : "top-0"
            }`}
          >
            userEmail :
          </label>
          <input
            type="text"
            id="userEmail"
            className=" w-full md:w-4/6  border-b rounded p-2 focus-visible:outline-0 z-10"
            placeholder="userEmail"
          />
        </div>
        <div className="   rowTail justify-center  relative my-10">
          <label
            htmlFor="userPassword"
            className={`absolute text-mainColor   md:left-[17.5%] left-[2.5%] transition-all duration-500 ${
              showLabel4 ? "-top-7" : "top-0"
            }`}
          >
            userPassword :
          </label>
          <input
            type="text"
            id="userPassword"
            className=" w-full md:w-4/6  border-b rounded p-2 focus-visible:outline-0 z-10"
            placeholder="userPassword"
          />
        </div>
        <button className=" md:ml-[17%]  text-white bg-mainColor p-2 rounded ">
          send Message
        </button>
      </div>
    </div>
  );
}
