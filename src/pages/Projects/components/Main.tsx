import Button from '../../components/Button'
import smallBtn from "../../../assets/smallbtn.svg";

import searchIcon from "../../../assets/searchIcon.svg";
import lines from "../../../assets/lines.svg";
import blocks from "../../../assets/blocks.svg";
import vector from "../../../assets/Vector.svg";

import help from "../../../assets/helpIcon.svg";
import { useState } from 'react';
import RecentProjects from './RecentProjects';

const Main = ({isAddModalopen, setIsAddModalOpen}) => {
    const [hasProjects, setHasProjects] = useState(true);
    
  return (
    <main className="flex flex-col grow max-w-full w-[50%]">
          <div className="flex justify-between items-center gap-[24px] sm:gap-0 border-b">
            <p className="font-medium text-[20px] pl-8">Recent</p>
            <div className="flex items-center gap-8 flex-col sm:flex-row py-2 pr-8 ">
              <Button
                onClick={()=>setIsAddModalOpen(true)}
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
          <RecentProjects status={hasProjects} />
          <img
            className="fixed bottom-0 right-0 w-[60px] h-[60px] sm:w-[98px] sm:h-[98px]"
            src={help}
            alt="helpIcon"
          />
        </main>
  )
}

export default Main
