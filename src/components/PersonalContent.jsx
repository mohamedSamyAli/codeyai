import Button from "./UI/Button";
import emptyContent from "../assets/personalPage/emptyContent.svg";
import smallBtn from "../assets/personalPage/smallbtn.svg";

import projectBlock from "../assets/personalPage/ProjectBlock.svg";

import PersonalProjects from "./PersonalProjects";

const PersonalContent = (props) => {
  const projects = [
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
    {
      image: projectBlock,
      title: "Block Diagram",
      description: "9 hour ago",
    },
  ];

  return props.status ? (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full px-8">
        {projects.map((project) => {
          return (
            <PersonalProjects
              image={project.image}
              title={project.title}
              desc={project.description}
            />
          );
        })}
      </div>
  ) : (
    <div className="element-center flex-col gap-8 h-full py-9 sm:py-0">
      <div>
        <img src={emptyContent} alt="content-img" />
      </div>
      <p className="text-[20px] font-medium">No Projects created yet</p>
      <Button
        className={`btn h-10 element-center gap-[10px] rounded-lg py-[10px] px-5`}
      >
        <span>
          <img src={smallBtn} alt="smallBtn" />
        </span>
        <span className="text-[14px] font-medium">New Project</span>
      </Button>
    </div>
  );
};

export default PersonalContent;
