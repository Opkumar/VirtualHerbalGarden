import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import useStore from "../utils/useStore";

function Header() {
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { clickCount } = useStore();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/Results?query=${searchTerm}`);
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick1 = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className="relative z-0">
        <nav className="ph:my-4 flex justify-between items-center relative z-0">
          <div className="flex items-center  ml-5 ">
            <img className="w-11 ph:w-16 " src="./logo.png" alt="logo" />
            <h1 className="hidden ph:block text-3xl ml-5 font-bold text-gray-800">
              Virtual Herbal Garden
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="mb-[-45px] w-56  hidden ph:block">
              <div
                id="google_translate_element"
                className=" relative z-0  "
              ></div>
              <div className="h-10 w-[80px] bg-white relative z-10 mt-[-45px]"></div>
            </div>
            <div className="my-4  ph:mr-5 flex justify-between items-center">
              {isFormVisible && (
                <div className="flex justify-center items-center ph:hidden">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center border rounded-md pl-1"
                >
                  <input
                    type="text"
                    placeholder="Search plants..."
                    className="px-4 py-2 w-full max-w-xs focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass text-[#49A010] text-xl mr-4"></i>
                  </button>
                </form>
                  <button className={`
                    ${isFormVisible?"":""}
                    w-6 h-6  bg-white border rounded-full mt-[-40px]  ml-[-10px] flex justify-center items-center`}
                    onClick={() =>{ 
                      setIsFormVisible(!isFormVisible)
    
                    }} >
                  <i className="fa-solid fa-xmark text-xl text-red-500"></i>
                  </button>
                  </div>
              )}
              <i
                className={`fa-solid fa-magnifying-glass ph:hidden
                    ${isFormVisible? "hidden":"block"}
                     text-[#49A010] text-2xl ph:mr-4`}
                onClick={() =>{ 
                  setIsFormVisible(!isFormVisible)

                }}
              ></i>
              <form
                onSubmit={handleSearch}
                className="hidden ph:flex  items-center border rounded-md  pl-1"
              >
                <input
                  type="text"
                  placeholder="Search plants..."
                  className="px-4 py-2    w-full max-w-xs focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass text-[#49A010] text-xl mr-4"></i>
                </button>
              </form>
              <NavLink to="/favourite" className={`hidden ph:block`}>
                <button className="ml-4">
                  <div className=" mb-[-18px] ml-6 h-5 w-5  bg-red-500 flex justify-center items-center  z-10 relative rounded-full">
                    <div className="text-white">{clickCount}</div>
                  </div>
                  <i className="fa-regular fa-heart text-3xl z-0 text-[#49A010] relative"></i>
                </button>
              </NavLink>
              <div className="mx-5">
                <div className="w-10 h-10  ">
                  <img
                    className="rounded-full w-10 h-10 "
                    src="https://gachwala.in/wp-content/uploads/2022/06/tulsi-plant.jpg"
                    alt="login"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="h-12 bg-gray-300 flex justify-between relative z-10  items-center pl-10">
          <div className="ph:hidden">
            <i className="fa-solid fa-bars text-3xl"></i>
          </div>
          <ul className="hidden ph:flex gap-8 hover:cursor-pointer text-xl font-bold text-[#49A010] ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#de6c20]" : "text-[#49A010]"
                  } cursor-pointer`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#de6c20]" : "text-[#49A010]"
                  } cursor-pointer`
                }
                to="/Plants"
              >
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#de6c20]" : "text-[#49A010]"
                  } cursor-pointer`
                }
                to="/Diseases"
              >
                Diseases
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#de6c20]" : "text-[#49A010]"
                  } cursor-pointer`
                }
                to="/Quizes"
              >
                Quizes
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <ul
              className={`flex gap-2 py-[1px]  px-3 relative z-0 bg-slate-100 rounded-l-md transition-transform duration-50 ease-linear  ${
                isAnimating ? "animate-slidein" : ""
              } ${isVisible ? "block" : "hidden"}`}
              style={{
                animationDuration: "1s",
                transform: isAnimating ? "translateX(0) scaleX(1)" : "",
              }}
            >
              <li className="cursor-pointer border rounded-md text-sm bg-blue-200 px-1 ">Ayurveda</li>
              <li className="cursor-pointer border rounded-md text-sm bg-blue-200 px-1 ">Yoga</li>
              <li className="cursor-pointer border rounded-md text-sm bg-blue-200 px-1 ">Unani</li>
              <li className="cursor-pointer border rounded-md text-sm bg-blue-200 px-1 ">Siddha</li>
              <li className="cursor-pointer border rounded-md text-sm bg-blue-200 px-1 ">Homoeopathy</li>
            </ul>
            <div
              onClick={() => {
                handleClick(), handleClick1();
              }}
              className=" h-8 w-20  relative z-10 bg-gray-500  flex justify-center items-center px-2  rounded-lg text-white hover:cursor-pointer  "
            >
              <i className="fa-solid fa-filter mr-2 w-auto"></i>
              <button className="">Filter</button>
            </div>
            <div className=" pr-10 h-10 bg-gray-300 relative z-10"></div>
          </div>
        </nav>
      </header>
      {/* <section className="-mt-52  absolute z-50 w-screen h-screen  bg-gray-200  ">
        <div className=""></div>
        <div className="">
          
        </div>

      </section>
       */}
    </>
  );
}

export default Header;
