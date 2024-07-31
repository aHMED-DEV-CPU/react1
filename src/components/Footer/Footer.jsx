export default function Footer() {
  return (
    <>
      <div className=" p-10 bg-[#2c3e50]">
        <div className="container">
          <div className=" rowTail">
            <div className=" p-4 text-center text-white w-1/3 max-[992px]:w-full">
              <h3 className=" text-3xl font-bold mb-3 max-[992px]:my-9">
                LOCATION
              </h3>
              <p className=" leading-7">
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className=" p-4 text-center text-white w-1/3 max-[992px]:w-full">
              <h3 className=" text-3xl font-bold mb-3 max-[992px]:my-9">
                AROUND THE WEB
              </h3>
              <ul className=" flex  justify-center">
                <li className="w-10 h-10 border rounded-full flex justify-center items-center mx-2  ">
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li className="w-10 h-10 border rounded-full flex justify-center items-center mx-2">
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li className="w-10 h-10 border rounded-full flex justify-center items-center mx-2">
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li className="w-10 h-10 border rounded-full flex justify-center items-center mx-2">
                  <i className="fa-solid fa-globe"></i>
                </li>
              </ul>
            </div>
            <div className=" p-4 text-center text-white w-1/3 max-[992px]:w-full">
              <h3 className=" text-3xl font-bold mb-3 max-[992px]:my-9">
                ABOUT FREELANCER
              </h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1a252f]  text-white/95  text-center py-5">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
