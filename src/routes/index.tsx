import {createBrowserRouter} from "react-router-dom";
import CustomNodeFlow from "../pages/DigramCreator"
import { LandingPaage } from "../pages/LandingPage";
import { Projects } from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/codeyai",
    element: <LandingPaage />
  },
  {
    path: "/digrame/:projectId",
    element: <CustomNodeFlow />,
  },{
    path:"/projects",
    element:<Projects/>
  }
])