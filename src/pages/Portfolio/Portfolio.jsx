import { useEffect, useState } from "react";
import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  let [showImage, setShowImage] = useState(false);
  let [src, setSource] = useState(image1);
  const [imageToggled, setImageToggled] = useState(false);

  function ShowAndHide(theImage) {
    setSource(theImage);
    setShowImage(true);
    setImageToggled(true);
  }

  useEffect(() => {
    const handleDocumentClick = () => {
      if (showImage && !imageToggled) {
        setShowImage(false);
      }
      setImageToggled(false);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showImage, imageToggled]);

  return (
    <div className=" navVh ">
      <h2 className="  text-4xl pt-[106px] text-center font-bold text-[#212529] py-6">
        PORTFOLIO COMPONENT
      </h2>
      <div className=" flex justify-center mb-5">
        <i className="fa-solid fa-star  relative">
          <div className=" absolute  before:content-[''] before:block before:w-20 before:h-1 before:bg-[#212529]  top-[7px] right-[30px]"></div>
          <div className=" absolute  after:content-[''] after:block after:w-20 after:h-1 after:bg-[#212529]  top-[7px] left-[30px]"></div>
        </i>
      </div>
      <div
        className={`absolute z-30   bg-[#0d6efd40] inset-0 flex justify-center  ${
          showImage ? "" : "hidden"
        } `}
      >
        <img
          src={src}
          alt=""
          className=" rounded-lg w-[600px]  fixed top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container">
        <div className="rowTail">
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image1} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image1);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image2} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image2);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image3} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image3);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image1} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image1);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image2} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image2);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2  lg:w-1/3 px-6">
            <div className="    my-6 cursor-pointer  relative group   ">
              <img src={image3} alt="" className=" rounded-lg " />
              <div
                className="layer   absolute bg-mainColor/80  inset-0  rounded-lg hidden justify-center items-center  group-hover:flex  "
                onClick={() => {
                  ShowAndHide(image3);
                }}
              >
                <i className="fa-solid fa-plus  text-8xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
