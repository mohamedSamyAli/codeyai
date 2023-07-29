import Button from "../../components/Button";
import emptyContent from "../../../assets/emptyContent.svg";
import smallBtn from "../../../assets/smallbtn.svg";
import { getAllProjects } from "../fakeApi";

import projectBlock from "../../../assets/ProjectBlock.svg";

import PersonalProjects from "./PersonalProjects";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentProjects = (props: any) => {
  const [projects, setProJects] = useState([]);
  useEffect(() => {
    updateProjects();
  }, []);
  const updateProjects = () => {
    setProJects(getAllProjects());
  };

  // let old = (
  //   <div>
  //     <div className="flex">
  //       {projects.map((ele) => {
  //         return (
  //           <div
  //             key={ele.id}
  //             className="w-fit p-2  hover:cursor-pointer m-1 border-solid border-black border-[1px]"
  //           >
  //             <Link to={"/codeyai/digrame/" + ele.id}>{ele.packageName}</Link>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  // const projects = [
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  //   {
  //     image: projectBlock,
  //     title: "Block Diagram",
  //     description: "9 hour ago",
  //   },
  // ];

  return props.status ? (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full px-8">
      {projects.map((project) => {
        return (
          <Link to={"/codeyai/digrame/" + project.id}>
            <PersonalProjects
              image={projectBlock}
              title={project.name}
              desc={project.description}
            />
          </Link>
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

export default RecentProjects;
