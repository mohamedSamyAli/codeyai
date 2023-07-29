import Button from "../../components/Button";
import "./Landing.css";

import leftImg from "../../../assets/Left.svg";
import rightImg from "../../../assets/Right.svg";
import webTitle from "../../../assets/website-title.svg";
import VideoLogo from "../../../assets/VideoLogo.png";
import GoogleLanding from "../../../assets/GoogleLogin.svg";
import ArrowLanding from "../../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container">
        <div className="container pt-[50px] px-[30px] mb-[30px]">
          <h1 className="pb-[24px] px-[25px] font-medium text-[24px] md:text-[28px] text-center text-[#22222A]">
            Your{" "}
            <span className="text-4xl from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent">
            CodeAi diagrams
            </span>{" "}
            are{" "}
            <span className="text-4xl from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent">
              coded
            </span>{" "}
            with one click.
          </h1>
          <p className="font-normal text-base max-w-full text-center ">
            Revolutionize your team's workflow with our cutting-edge
            diagram-to-code platform. Visualize complex ideas faster and
            collaborate like never before with Intelligent Programming
            Diagramming.
          </p>
        </div>
        <h4 className="font-medium text-center text-[#4068B0] text-base mb-[30px]">
          Get your free account today
        </h4>
        <div className="element-center gap-[25px] flex-col sm:flex-row mb-[20px]">
          <Button className="btn element-center gap-[8px] bg-[#1E2F4C]">
            <span>
              <img src={GoogleLanding} alt="googleLogo" />
            </span>
            <span>Sign up with Google</span>{" "}
          </Button>
          <span className="text-[#7B7F95] font-normal text-sm text-center">
            Or
          </span>
          <Button
            className="btn element-center gap-[8px] px-[30px] sm:px-[28px]"
            onClick={() => navigate("/register")}
          >
            <span>Sign up with Email</span>
            <span>
              <img src={ArrowLanding} alt="ArrowLanding" />
            </span>
          </Button>
        </div>
      </div>
      <div className="relative bottom-[-120px] mx-auto mt-[-120px] mb-[50px] text-center w-[343px] sm:w-[961px] max-w-full h-[593px] shrink-0 rounded-[10px] border border-[#3F67AD] bg-[#F4F5F7] ">
        <div className="mainSec">
          <div className="nav">
            <div className="left">
              <img src={leftImg} alt="leftImg" />
            </div>
            <div className="centerDiv">
              <img src={webTitle} alt="webTitle" />
            </div>
            <div className="right">
              <img src={rightImg} alt="rightImg" />
            </div>
          </div>
          <div className="video">
            <img src={VideoLogo} alt="VideoLogo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
