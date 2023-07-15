import Button from "../components/UI/Button";
import OrLogin from "../assets/OrLogin.svg";
import FacebookLogin from "../assets/FacebookLogin.svg";
import GoogleLogin from "../assets/GoogleLogin.svg";

const Login = () => {
  return (
    <div className="container element-center flex-col gap-4 pt-10 pb-16">
      <div className="flex flex-col items-center gap-4 font">
        <h1 className="text-2xl font-medium  text-[#22222A] italic leading-normal">
          Log in or create an account
        </h1>
        <p className="italic font-normal text-base leading-[25px] text-[#464758]">
          Quickly get started by signing in using your existing accounts.
        </p>
      </div>
      <div className="border rounded-xl border-[#3F67AD] flex items-start flex-col p-8 gap-8 flex-[1_0_0] bg-white">
        <div className="flex flex-col w-full max-w-full gap-6">
          <Button className="element-center gap-3 bg-white px-6 py-4 flex-[1_0_0] rounded-xl border border-[#E3E4EA]">
            <span>
              <img src={GoogleLogin} alt="googleLogo" />
            </span>
            <span className="italic text-[#22222A] text-sm font-normal leading-normal">
              Sign up with Google
            </span>
          </Button>
          <Button className="element-center gap-3 bg-[#3284F4] px-6 py-4 flex-[1_0_0] rounded-xl border">
            <span className="w-max">
              <img src={FacebookLogin} alt="faceLogo" />
            </span>
            <span className="italic text-[#FFF] text-sm font-normal leading-normal">
              Sign up with Facebook
            </span>
          </Button>
        </div>
        <span className="w-full max-w-full">
          <img className="w-full" src={OrLogin} alt="OrLogin" />
        </span>
        <form
          action=""
          className="flex items-start flex-col w-full max-w-full gap-8"
        >
          <div className="flex flex-col items-start gap-3 w-full max-w-full">
            <label className="text-center text-[#22222A] italic font-normal text-base leading-[25px]">
              Enter your Email
            </label>
            <input
              className="placeholder:text-[11px] sm:placeholder:text-[14px] flex items-center gap-[10px] px-4 py-5 border border-[#E3E4EA] rounded-xl w-full max-w-full outline-[#3284F4]"
              type="email"
              placeholder="Name@example.com"
            />
          </div>
          <Button
            type="submit"
            className="element-center gap-6 px-7 py-4 bg-[#3F67AD] text-white rounded-xl w-full max-w-full"
          >
            Continue
          </Button>
        </form>
        <p className="font-normal italic text-sm leading-normal text-[#464758]">
          By proceeding, you are agreeing to CodeyAi's{" "}
          <span className="text-[#3F67AD] font-medium">Terms</span> and
          <span className="text-[#3F67AD] font-medium"> Privacy Notice</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
