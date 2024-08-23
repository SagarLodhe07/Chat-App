import MessageBox from "../Components/MessageBox";
import Siderbar from "../Components/Siderbar";

const Home = () => {
  return (
    <div className=" flex  bg-white mx-auto w-full max-w-5xl h-[600px]  rounded-md">
      <Siderbar />
      <MessageBox/>
    </div>
  );
};

export default Home;
