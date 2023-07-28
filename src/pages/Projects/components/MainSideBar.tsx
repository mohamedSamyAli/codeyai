import Recent from "../../../assets/recent.svg";
import myDocument from "../../../assets/mydocuments.svg";
import shared from "../../../assets/sharewithme.svg";
import stared from "../../../assets/stared.svg";

const MainSideBar = () => {
  return (
    <aside className=" pt-8 flex flex-col border-r font-medium w-full sm:w-[240px]">
    <div className="flex flex-col bg-white border-b pb-8">
      <div className="flex items-center gap-3 py-3 pl-8 bg-[#EBF1FF]">
        <span className="flex">
          <img src={Recent} alt="recent-img" />
        </span>
        <p>Recent</p>
      </div>
      <div className="flex items-center gap-3 py-3 pl-8">
        <span className="flex">
          <img src={myDocument} alt="myDocument-img" />
        </span>
        <p>My Projects</p>
      </div>
      <div className="flex items-center gap-3 py-3 pl-8">
        <span className="flex ">
          <img src={shared} alt="shared-img" />
        </span>
        <p>Shared with me</p>
      </div>
    </div>
    <div className="pt-4 text-sm">
      <div className="flex items-center gap-3 py-3 pl-8">
        <span className="flex">
          <img src={stared} alt="stared-img" />
        </span>
        <p>Favorite Documents</p>
      </div>
    </div>
  </aside>
  )
}

export default MainSideBar