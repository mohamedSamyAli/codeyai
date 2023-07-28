const PersonalProjects = ({ image, title, desc }) => {
    return (
      <div className="flex justify-center flex-col gap-4 w-full">
        <img className="w-full" src={image} alt="projectImage" />
        <div className="flex flex-col gap-2 py-0 px-2 items-start">
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-[11px] font-normal text-[#7B7F95]">{desc}</p>
        </div>
      </div>
    );
  };
  export default PersonalProjects;
  