import Button from "./UI/Button";

function Landing() {
  return (
    <section>
      <div className="container">
        <div className="element-center flex-col pt-[50px] px-[30px] mb-[30px]">
          <h1 className="pb-[24px] px-[25px] font-medium text-[24px] md:text-[28px] text-center text-[#22222A]">
            Your{" "}
            <span className="text-4xl from-[#3F67AD] via-[#7084B3] to-[#FF8F94] bg-gradient-to-b bg-clip-text text-transparent">
              UML Class diagrams
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
            <span className="element-center bg-white w-[25px] h-[25px] rounded-[50%]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.2025C18 8.61 17.9464 8.0475 17.8544 7.5H9.1954V10.8825H14.1533C13.931 11.9925 13.2797 12.93 12.3142 13.5675V15.8175H15.272C17.0038 14.25 18 11.94 18 9.2025Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.1954 18C11.6782 18 13.7548 17.19 15.272 15.8175L12.3142 13.5675C11.4866 14.1075 10.4368 14.4375 9.1954 14.4375C6.79693 14.4375 4.76628 12.855 4.03831 10.7175H0.988506V13.035C2.49808 15.975 5.60153 18 9.1954 18Z"
                  fill="#34A853"
                />
                <path
                  d="M4.03831 10.7175C3.84674 10.1775 3.74713 9.6 3.74713 9C3.74713 8.4 3.85441 7.8225 4.03831 7.2825V4.965H0.988506C0.360153 6.18 0 7.545 0 9C0 10.455 0.360153 11.82 0.988506 13.035L4.03831 10.7175Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.1954 3.5625C10.5517 3.5625 11.7625 4.02 12.7203 4.9125L15.341 2.3475C13.7548 0.8925 11.6782 0 9.1954 0C5.60153 0 2.49808 2.025 0.988506 4.965L4.03831 7.2825C4.76628 5.145 6.79693 3.5625 9.1954 3.5625Z"
                  fill="#EA4335"
                />
              </svg>
            </span>
            <span>Sign up with Google</span>{" "}
          </Button>{" "}
          <span className="text-[#7B7F95] font-normal text-sm text-center">
            Or
          </span>
          <Button className="btn element-center gap-[8px]">
            <span>Sign up with Email</span>
            <span className="element-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5.71484L15 10.0006L10 14.2863"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 10L5 10"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.714338 10.0006C0.714338 15.1289 4.87169 19.2863 10.0001 19.2863C15.1284 19.2863 19.2858 15.1289 19.2858 10.0006C19.2858 4.8722 15.1284 0.714844 10.0001 0.714843C4.87169 0.714843 0.714338 4.8722 0.714338 10.0006Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
