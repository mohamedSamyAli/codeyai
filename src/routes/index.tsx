import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/components/Home";
import RootLayout from "../pages/components/RootLayout";
import CustomNodeFlow from "../pages/DigramCreator"
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LandingPaage } from "../pages/LandingPage";
import Login from "../pages/Login/Login";
import { Projects } from "../pages/Projects";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
    {index: true, element:<Home/>},
    {path: "codeyai",element: <LandingPaage />},
    {path: "codeyai/digrame/:projectId",element: <CustomNodeFlow />},
    {path: "codeyai/projects",element:<Projects/>},
    ],
  },
  {
    path:"login", element:<Login/>
  },
  {
    path:"register", element:<Register/>
  }
]);