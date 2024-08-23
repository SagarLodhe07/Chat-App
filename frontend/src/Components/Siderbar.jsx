import Conversations from "./Conversations";
import Search from "./Search";
import { CiLogout } from "react-icons/ci";

const Siderbar = () => {
  return (
    <div className="">
      <Search />
      {/* <div className="divider px-3" /> */}
      <Conversations />
      <div className="flex flex-1 justify-between items-center mx-auto p-4">
        <h1>User Image</h1>
        <CiLogout className="size-8 hover:fill-black" />
      </div>
    </div>
  );
};

export default Siderbar;
