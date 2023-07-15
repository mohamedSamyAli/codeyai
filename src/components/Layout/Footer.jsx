import GitHub from "../../assets/GitHub.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/Youtube.svg";
import Facebook from "../../assets/Facebook.svg";

function Footer() {
  return (
    <footer className="pt-[32px]">
      <div className="container flex justify-between items-center gap-[16px] md:gap-0 flex-col-reverse sm:flex-row border border-x-transparent mb-4">
        <div className="flex justify-between items-center gap-[50px] text-[#31313A] mb-[10px] sm:mb-0">
          <p>Privacy policy</p>
          <p>Terms</p>
        </div>
        <div className="flex items-center gap-[16px] flex-row py-[12px] flex-wrap">
          <span className="w-[38px] h-[40px] sm:w-[48px] sm:h-[50px] max-w-full">
            <img className="w-full h-fit" src={GitHub} alt="GitHubLogo" />
          </span>
          <span className="w-[38px] h-[40px] sm:w-[48px] sm:h-[50px] max-w-full">
            <img className="w-full h-fit" src={Linkedin} alt="LinkedinLogo" />
          </span>
          <span className="w-[38px] h-[40px] sm:w-[48px] sm:h-[50px] max-w-full">
            <img className="w-full h-fit" src={Twitter} alt="TwitterLogo" />
          </span>
          <span className="w-[38px] h-[40px] sm:w-[48px] sm:h-[50px] max-w-full">
            <img className="w-full h-fit" src={Youtube} alt="YoutubeLogo" />
          </span>
          <span className="w-[38px] h-[40px] sm:w-[48px] sm:h-[50px] max-w-full">
            <img className="w-full h-fit" src={Facebook} alt="FacebookLogo" />
          </span>
        </div>
      </div>
      <p className="text-[#7B7F95] text-center sm:text-right px-12 pb-5">
        Copyright © 2023 CodeyAi
      </p>
    </footer>
  );
}

export default Footer;
