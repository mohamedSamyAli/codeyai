import vs from "../assets/VS.svg";
import zoom from "../assets/zoom.svg";
import slack from "../assets/slack.svg";

function RelationsSection() {
  return (
    <section className="bg-gradient-to-r from-[#4169B1] to-[#1A2841] pt-[50px]">
      <div className="element-center flex-col pt-[50px] px-[30px] mb-[65px] sm:mb-[48px]">
        <h3 className="pb-[24px] px-[25px] font-medium text-[20px] md:text-[28px] text-center text-[#FFF]">
          We are great at relationships
        </h3>
        <p className="text-[#F4F5F7] text-[16px] md:text-[20px] font-normal text-center self-stretch">
          If your team usually uses it, we integrate with it. add Easily your
          tools.
        </p>
      </div>
      <div className="element-center gap-16 md:gap-40 pb-[30px] flex-wrap">
        <span className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] max-w-full">
          <img className="w-full h-fit" src={slack} alt="slackLogo" />
        </span>
        <span className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] max-w-full">
          <img className="w-full h-fit" src={vs} alt="slackLogo" />
        </span>
        <span className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] max-w-full">
          <img className="w-full h-fit" src={zoom} alt="slackLogo" />
        </span>
      </div>
    </section>
  );
}

export default RelationsSection;
