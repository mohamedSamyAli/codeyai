import Button from "../UI/Button";
import logo from "../../assets/codey-logo.svg";
import layerlogo from "../../assets/Layer6.svg";

function Headers() {
  return (
    <header className="pt-[32px]">
      <div className="container flex justify-between items-center gap-[24px] sm:gap-0 border border-x-transparent ">
        <a href="/" className="flex">
          <img src={layerlogo} alt="layerlogo-img" />
          <img className="relative -left-7" src={logo} alt="logo-img" />
        </a>
        <div className="flex items-center gap-[24px] flex-col sm:flex-row py-[12px] ">
          <Button
            type="submit"
            className="text-[#3F67AD] font-medium text-lg leading-[26px] hidden sm:block"
          >
            Login
          </Button>
          <Button className={`btn`}>Try for free</Button>
        </div>
      </div>
    </header>
  );
}

export default Headers;
