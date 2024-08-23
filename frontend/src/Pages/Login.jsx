const Login = () => {
  return (
    <div className="min-w-96 mx-auto flex flex-col justify-center        items-center">
      <div className="bg-gray-200 shadow-lg w-1/2 p-6 rounded-md">
        <div className="flex justify-center items-center gap-8">
          <img src={"/chat.svg"} alt="logo" className="size-10" />
          <h1 className="text-blue-600 text-2xl font-bold text-center">
            Chatter App
          </h1>
        </div>
        <form className="mt-5">
          <label htmlFor="">
            {" "}
            <span className="text-xl text-slate-700 font-bold">
              Mobile Number
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
          />
          <label className="">
            <span className="text-xl  text-slate-700 font-bold"> Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
          />

          <button className="btn mt-4 btn-block btn-sm text-white">
            Login
          </button>
          <span className="px-4 text-slate-600">New at Chatter ?</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
