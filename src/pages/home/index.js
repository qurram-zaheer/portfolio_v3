import React, { useState } from "react";
import ParticlesComponent from "../../components/particles";
import About from "../../components/about";
import style from "./style.css";

import rust from "../../assets/icons/lang/rust.png";
import go from "../../assets/icons/lang/go.png";
import python from "../../assets/icons/lang/python.png";
import ts from "../../assets/icons/lang/ts.png";

import aws from "../../assets/icons/lang/aws.png";
import preact from "../../assets/icons/lang/preact.png";
import pytorch from "../../assets/icons/lang/pytorch.png";
import vue from "../../assets/icons/lang/vue.png";
import jenkins from "../../assets/icons/lang/jenkins.png";
import Work from "../../components/work";

const Home = () => {
  const [route, setRoute] = useState("home");
  return (
    <div className="h-full w-full md:w-screen absolute top-0 left-0">
      <ParticlesComponent />
      <div
        className={`z-50 px-3 lg:px-0 relative md:absolute md:w-1/2 flex flex-col h-full justify-center items-center text-white text-2xl`}
      >
        {/* {"<Q/Z>"} */}
        <div
          className={` text-5xl sm:text-6xl border-b-2 border-gray-800`}
          style={{ fontFamily: "Nova Mono" }}
        >
          {"<Q/Z>"}
        </div>
        <div
          className={`text-center text-sm sm:text-base mt-2 max-w-md ${style.bannerPara}`}
        >
          Hi! My name is{" "}
          <span
            className={` text-lg sm:text-xl`}
            style={{ fontFamily: "Zilla Slab Highlight" }}
          >
            qurram
          </span>{" "}
          and I love programming. I aim to create blazing fast websites with
          pixel perfect UIs, no advertisements, sponsored posts, affiliations or
          any other such noise.
        </div>
        <div className="flex mt-4 justify-around">
          <img src={rust} className="h-8 w-auto lg:px-2 px-1" alt="" />
          <img src={ts} className="h-8 w-auto lg:px-2 px-1" alt="" />
          <img src={go} className="h-8 auto lg:px-2 px-1" alt="" />
          <img
            src={python}
            className="h-8 auto border-r-2 border-gray-500 lg:px-2 px-1"
            alt=""
          />
          <img src={aws} className="h-8 auto lg:px-2 px-1" alt="" />
          <img src={pytorch} className="h-8 auto lg:px-2 px-1" alt="" />
          <img src={jenkins} className="h-8 auto lg:px-2 px-1" alt="" />
          <img src={vue} className="h-8 auto lg:px-2 px-1" alt="" />
          <img src={preact} className="h-8 auto lg:px-2 px-1" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 md:hidden">
          <div className="relative flex flex-col justify-center p-3 animate-bounce">
            <svg
              className="animate-bounce w-6 h-6 text-gray-200 text-opacity-50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`w-full md:w-1/2 absolute md:right-0 h-full`}>
        <div className="absolute top-0 right-0 flex z-50">
          <div
            className="p-3 font-hairline text-gray-500 flex flex-col justify-center hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => setRoute("home")}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                className="text-center m-auto"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g className="fill-current">
                    <path d="M85.82503,14.33333c-1.14611,0.03914 -2.24966,0.44378 -3.14941,1.15479l-50.92953,40.12353c-6.46397,5.09418 -10.24609,12.87841 -10.24609,21.10807v68.40527c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-35.83333c0,-1.05724 0.73442,-1.79167 1.79167,-1.79167h17.91667c1.05724,0 1.79167,0.73442 1.79167,1.79167v35.83333c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-68.40527c0,-8.22966 -3.78213,-16.01389 -10.24609,-21.10807l-50.92953,-40.12353c-0.99396,-0.7852 -2.23327,-1.19417 -3.49935,-1.15479zM86,26.55306l47.60514,37.50602c3.8847,3.06149 6.14486,7.71798 6.14486,12.66064v66.61361h-32.25v-34.04167c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167h-17.91667c-6.86192,0 -12.54167,5.67974 -12.54167,12.54167v34.04167h-32.25v-66.61361c0,-4.94267 2.26016,-9.59916 6.14486,-12.66064z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-sm">Home</div>
          </div>
          <div
            className="p-3 font-hairline text-gray-500 flex flex-col justify-center hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => setRoute("Work")}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                className="text-center m-auto"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g className="fill-current">
                    <path d="M37.625,21.5c-10.88617,0 -19.70833,8.82217 -19.70833,19.70833v89.58333c0,10.88617 8.82217,19.70833 19.70833,19.70833h96.75c10.88617,0 19.70833,-8.82217 19.70833,-19.70833v-89.58333c0,-10.88617 -8.82217,-19.70833 -19.70833,-19.70833zM28.66667,57.33333h114.66667v73.45833c0,4.94858 -4.00975,8.95833 -8.95833,8.95833h-96.75c-4.94858,0 -8.95833,-4.00975 -8.95833,-8.95833zM91.368,68.00635c-2.55529,0.01089 -4.74976,1.81913 -5.24902,4.32519l-10.75,50.16667c-0.41507,1.88272 0.20989,3.84355 1.63786,5.13885c1.42797,1.2953 3.44027,1.7267 5.27372,1.13058c1.83346,-0.59611 3.20728,-2.12844 3.60046,-4.01586l10.75,-50.16667c0.36742,-1.59973 -0.01618,-3.27966 -1.04154,-4.56136c-1.02536,-1.2817 -2.58012,-2.02471 -4.22148,-2.01741zM109.23568,78.77734c-2.18814,0.00053 -4.1576,1.32735 -4.98006,3.35504c-0.82245,2.0277 -0.33375,4.35156 1.23575,5.87624l10.53304,10.53304l-10.53304,10.53304c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l14.33333,-14.33333c2.09823,-2.0991 2.09823,-5.50149 0,-7.60059l-14.33333,-14.33333c-1.01222,-1.0424 -2.4033,-1.63064 -3.85628,-1.6307zM62.60335,78.78434c-1.39592,0.04068 -2.72121,0.62301 -3.69531,1.6237l-14.33333,14.33333c-2.09823,2.0991 -2.09823,5.50149 0,7.60059l14.33333,14.33333c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-10.53304,-10.53304l10.53304,-10.53304c1.58706,-1.54566 2.06336,-3.90666 1.19966,-5.94673c-0.8637,-2.04007 -2.89048,-3.34134 -5.10493,-3.27756z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-sm">Work</div>
          </div>
          <div className="p-3 font-hairline text-gray-500 flex flex-col justify-center hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out">
            <a
              href="https://qurram-zaheer.github.io/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                  className="text-center m-auto"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none" />
                    <g className="fill-current">
                      <path d="M26.875,16.125v139.75h118.25v-139.75zM37.625,26.875h96.75v118.25h-96.75zM64.5,43c-5.9419,0 -10.75,4.8081 -10.75,10.75c0,2.87646 1.17578,5.45898 3.02344,7.39063c-4.99707,2.75049 -8.39844,8.0625 -8.39844,14.10938h10.75c0,-3.04443 2.33057,-5.375 5.375,-5.375c3.04443,0 5.375,2.33057 5.375,5.375h10.75c0,-6.04687 -3.40136,-11.35889 -8.39844,-14.10937c1.84766,-1.93164 3.02344,-4.51416 3.02344,-7.39062c0,-5.9419 -4.8081,-10.75 -10.75,-10.75zM91.375,43v10.75h32.25v-10.75zM91.375,64.5v10.75h32.25v-10.75zM48.375,96.75v10.75h43v-10.75zM102.125,96.75v10.75h21.5v-10.75zM48.375,118.25v10.75h26.875v-10.75zM102.125,118.25v10.75h21.5v-10.75z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-sm">Resume</div>
            </a>
          </div>
        </div>
        {route === "home" ? <About /> : <Work />}
      </div>
    </div>
  );
};

export default Home;
