import { useAuthContext } from "../Context/AuthContext";
import { useLogout } from "../Hooks/useLogout";
import Conversations from "./Conversations";
import Search from "./Search";
import { CiLogout } from "react-icons/ci";

const Siderbar = () => {
  const {loading,logout}=useLogout()
 const {authuser}= useAuthContext()

 console.log("Auth User",authuser);
 
  return (
    <div className="flex flex-col h-full">
      <Search />
      {/* <div className="divider px-3" /> */}
      <Conversations />
      <div className="flex mt-auto justify-between gap-3 items-center mx-auto p-4">
        <img src={authuser.profileImage} alt="User_Profile" className="w-14 border-2 rounded-full" />
        <h1 className="text-slate-800">{authuser.fullname}</h1>
        <CiLogout className="size-8 hover:fill-black"
        onClick={logout} />
      </div>
    </div>
  );
};

export default Siderbar;
