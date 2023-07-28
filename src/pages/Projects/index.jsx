import React, { useState, useEffect } from "react";
import { AddProject_Modal } from "./components/AddProjectModal";
import { getAllProjects } from "./fakeApi";
import { Link } from "react-router-dom";
import MainSideBar from "./components/MainSideBar";
import Main from "./components/Main";
import Header from "../components/Header";
export const Projects = () => {
  const [isAddModalopen, setIsAddModalOpen] = useState(false);
  const [projects, setProJects] = useState([]);
  useEffect(() => {
    updateProjects();
  }, [isAddModalopen]);
  const updateProjects = () => {
    setProJects(getAllProjects());
  };

  let old = (
    <div>
      <div className="flex">
        {projects.map((ele) => {
          return (
            <div
              key={ele.id}
              className="w-fit p-2  hover:cursor-pointer m-1 border-solid border-black border-[1px]"
            >
              <Link to={"/codeyai/digrame/" + ele.id}>{ele.packageName}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-wrap h-full">
        <MainSideBar />
        <Main
          isAddModalopen={isAddModalopen}
          setIsAddModalOpen={setIsAddModalOpen}
        />

        <AddProject_Modal
          isOpen={isAddModalopen}
          setIsOpen={setIsAddModalOpen}
        />
      </div>
    </div>
  );
};
