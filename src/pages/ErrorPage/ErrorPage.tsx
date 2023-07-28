import { Button } from "antd";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error:any = useRouteError();
    const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col" id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
    <Button className="mt-4" onClick={()=>navigate("/codeyai",{replace:true}) }>go back</Button>
  </div>
  )
}
    