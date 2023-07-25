import { useState } from "react";

import Button from "./UI/Button";

import logo from "../assets/codey-logo.svg";
import layerlogo from "../assets/Layer6.svg";
import notification from "../assets/personalPage/notifications.svg";
import vector from "../assets/personalPage/Vector.svg";

import myDocument from "../assets/personalPage/mydocuments.svg";
import Recent from "../assets/personalPage/recent.svg";
import shared from "../assets/personalPage/sharewithme.svg";
import stared from "../assets/personalPage/stared.svg";

import smallBtn from "../assets/personalPage/smallbtn.svg";

import searchIcon from "../assets/personalPage/searchIcon.svg";
import lines from "../assets/personalPage/lines.svg";
import blocks from "../assets/personalPage/blocks.svg";

import help from "../assets/personalPage/helpIcon.svg";

// import marked from "../assets/personalPage/marked.svg";

import PersonalContent from "./PersonalContent";

const Personal = () => {
  const [hasProjects, setHasProjects] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <header>
        <div className="flex justify-between items-center gap-[24px] sm:gap-0 border-b">
          <a href="/" className="flex pl-8">
            <img src={layerlogo} alt="layerlogo-img" />
            <img className="relative -left-7" src={logo} alt="logo-img" />
          </a>
          <div className="flex items-center gap-12 flex-col sm:flex-row py-5 pr-8 ">
            <span>
              <img src={notification} alt="notification-img" />
            </span>
            <div className="flex items-center gap-4">
              <span className="element-center w-[40px] h-[40px] max-w-[40px] rounded-[50%] bg-[#FF8F94] font-medium text-base text-[#3F67AD]">
                H
              </span>
              <p className="font-medium text-base text-[#31313A]">
                Hossam Hassan
              </p>
              <span>
                <img src={vector} alt="vector-img" />
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap h-full">
        <aside className=" pt-8 flex flex-col border-r font-medium w-full sm:w-[240px]">
          <div className="flex flex-col bg-white border-b pb-8">
            <div className="flex items-center gap-3 py-3 pl-8 bg-[#EBF1FF]">
              <span className="flex">
                <img src={Recent} alt="recent-img" />
              </span>
              <p>Recent</p>
            </div>
            <div className="flex items-center gap-3 py-3 pl-8">
              <span className="flex">
                <img src={myDocument} alt="myDocument-img" />
              </span>
              <p>My Projects</p>
            </div>
            <div className="flex items-center gap-3 py-3 pl-8">
              <span className="flex ">
                <img src={shared} alt="shared-img" />
              </span>
              <p>Shared with me</p>
            </div>
          </div>
          <div className="pt-4 text-sm">
            <div className="flex items-center gap-3 py-3 pl-8">
              <span className="flex">
                <img src={stared} alt="stared-img" />
              </span>
              <p>Favorite Documents</p>
            </div>
          </div>
        </aside>
        <main className="flex flex-col grow max-w-full w-[50%]">
          <div className="flex justify-between items-center gap-[24px] sm:gap-0 border-b">
            <p className="font-medium text-[20px] pl-8">Recent</p>
            <div className="flex items-center gap-8 flex-col sm:flex-row py-2 pr-8 ">
              <Button
                className={`btn h-10 element-center gap-[10px] rounded-lg py-[10px] px-5`}
              >
                <span>
                  <img src={smallBtn} alt="smallBtn" />
                </span>
                <span className="text-[10px] sm:text-[14px] font-medium">
                  New Project
                </span>
              </Button>
              <Button className="h-10 bg-[#EBF1FF] rounded-lg py-[10px] px-5 text-gray-600 font-medium text-[14px]">
                Import
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between px-8 py-8">
            <div className="flex gap-4 border rounded-lg items-center px-4 py-[14px] w-full sm:w-[360px]">
              <span>
                <img src={searchIcon} alt="searchIcon" />
              </span>
              <input
                placeholder="Search"
                className="outline-none w-full max-w-full"
              />
            </div>
            <div className="flex gap-10 items-center">
              <button className="relative flex justify-center items-center gap-2 text-[14px] group">
                <p>Last viewed</p>
                <span className="flex">
                  <img src={vector} alt="vector-img" />
                </span>
                <div className="absolute hidden border-b  group-focus:block top-full min-w-full w-40 bg-white drop-shadow-[0px_2px_19px_#3f67ad1f] mt-3 rounded before:content-[''] before:border-[15px] before:border-[transparent_transparent_white_transparent] before:absolute before:left-[15px] before:top-[-25px]">
                  <ul className="py-3 flex flex-col gap-[10px] text-center text-[11px] border-b border-[#E3E4EA] rounded-t">
                    <h6 className="text-gray-300">Sort by</h6>
                    <li className="hover:bg-[#EBF1FF] py-[5px]">
                      Alphabetical
                    </li>
                    <li className="hover:bg-[#EBF1FF] py-[5px]">
                      Date created
                    </li>
                    <li
                      className={`before:content-marked bfr hover:bg-[#EBF1FF] py-[5px]`}
                    >
                      Last viewed
                    </li>
                  </ul>
                  <ul className="py-3 flex flex-col gap-[10px] text-center text-[11px] rounded-b">
                    <h6 className="text-gray-300">Order</h6>
                    <li className="hover:bg-[#EBF1FF] py-[5px]">Older first</li>
                    <li className="hover:bg-[#EBF1FF] py-[5px]">
                      Newest first
                    </li>
                  </ul>
                </div>
              </button>
              <div className="flex gap-4">
                <span>
                  <img src={blocks} alt="blocks" />
                </span>
                <span>
                  <img src={lines} alt="lines" />
                </span>
              </div>
            </div>
          </div>
          <PersonalContent status={hasProjects} />
          <img
            className="fixed bottom-0 right-0 w-[60px] h-[60px] sm:w-[98px] sm:h-[98px]"
            src={help}
            alt="helpIcon"
          />
        </main>
      </div>
    </div>
  );
};

export default Personal;
