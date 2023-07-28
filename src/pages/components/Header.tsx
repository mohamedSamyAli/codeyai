import React from 'react'
import layerlogo from "../../assets/Layer6.svg";
import logo from "../../assets/codey-logo.svg";
import notification from "../../assets/notifications.svg";
import vector from "../../assets/Vector.svg";

const Header = () => {
  return (
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
              <span className="element-center flex items-center justify-center w-[40px] h-[40px] max-w-[40px] rounded-[50%] bg-[#FF8F94] font-medium text-base text-[#3F67AD]">
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
  )
}

export default Header