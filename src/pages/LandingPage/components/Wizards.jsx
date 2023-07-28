import Ellipse4 from "../../../assets/Ellipse4.svg";
import Ellipse5 from "../../../assets/Ellipse5.svg";
import Ellipse6 from "../../../assets/Ellipse6.svg";

function Wizards() {
  return (
    <section className="bg-gradient-to-r from-[#1A2841] to-[#4169B1] pb-[72px]">
      <div className="element-center flex-col pt-[50px] px-[30px] mb-[65px] sm:mb-[48px]">
        <h2 className="pb-[24px] px-[25px] font-medium text-[20px] md:text-[28px] text-center text-[#FFF]">
          Our Wizards
        </h2>
        <p className="text-[#F4F5F7] text-[16px] md:text-[20px] font-normal text-center font-Sofia">
          Meet the masterminds behind Intelligent Programming Diagramming:
        </p>
      </div>
      <div>
        <div className="flex items-center  justify-around flex-col sm:flex-row gap-8 flex-wrap">
          <div className="element-center w-[343px] h-[343px] max-w-full sm:w-[352px] sm:h-[352px] rounded-l-[176px] rounded-br-[176px] rounded-tr-[32px] bg-[#F4F5F7] shrink-0 shadow-[0_2px_25px_0_#3F67AD]">
            <div className="bg-white element-center flex-col w-[319px] h-[319px] max-w-full sm:w[328px] sm:h-[328px] rounded-l-[176px] rounded-br-[176px] rounded-tr-[32px] shrink-0">
              <img src={Ellipse4} alt="Ellipse4" />
              <h3 className="text-center text-[20px] uppercase text-[#22222A] py-[16px] font-Russo">
                Ahmed Mohammed
              </h3>
              <p className="from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent text-[18px] text-center">
                Founder & CEO
              </p>
            </div>
          </div>
          <div className="element-center w-[343px] h-[343px] max-w-full sm:w-[352px] sm:h-[352px] rounded-[48px] bg-[#F4F5F7] shrink-0 shadow-[0_2px_25px_0_#3F67AD]">
            <div className="bg-white element-center flex-col w-[319px] h-[319px] max-w-full sm:w[328px] sm:h-[328px] rounded-[40px] shrink-0">
              <img src={Ellipse5} alt="Ellipse5" />
              <h3 className="text-center text-[20px] uppercase text-[#22222A] py-[16px] font-Russo">
                Mohammed ali
              </h3>
              <p className="from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent text-[18px] text-center">
                CTO
              </p>
            </div>
          </div>
          <div className="element-center w-[343px] h-[343px] max-w-full sm:w-[352px] sm:h-[352px] rounded-[176px] bg-[#F4F5F7] shrink-0 shadow-[0_2px_25px_0_#3F67AD]">
            <div className="bg-white element-center flex-col w-[319px] h-[319px] max-w-full sm:w[328px] sm:h-[328px] rounded-[176px] shrink-0">
              <img src={Ellipse6} alt="Ellipse6" />
              <h3 className="text-center text-[20px] uppercase text-[#22222A] py-[16px] font-Russo">
                Omar Ashraf
              </h3>
              <p className="from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent text-[18px] text-center">
                Lead AI Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wizards;
