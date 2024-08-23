const Signup = () => {
  return (
    <div className="min-w-96 mx-auto flex flex-col justify-center        items-center">
      <div className="bg-gray-200 shadow-lg w-full p-6 rounded-md">
        <div className="flex justify-center items-center gap-8">
          <img src={"/chat.svg"} alt="logo" className="size-10" />
          <h1 className="text-blue-600 text-2xl font-bold text-center">
            Chatter App
          </h1>
        </div>
        <form className="mt-5">
          <div>
            <label htmlFor="">
              {" "}
              <span className="text-xl text-slate-700 font-bold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Jon Doe"
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label className="">
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="admin@2"
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label className="">
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Mobile Number
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your 10 digit moblie number"
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label className="">
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label className="">
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div className="flex">
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-md text-slate-700">Male</span>
                <input type="checkbox" className="checkbox border-slate-800" />
              </label>
            </div>
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-slate-700 text-md">
                  Female
                </span>
                <input type="checkbox" className="checkbox border-slate-800" />
              </label>
            </div>
          </div>

          <button className="btn mt-4 btn-block btn-sm text-white">
            Sign up
          </button>
          <span className="px-4 text-slate-600 hover:underline hover:text-slate-900">
            Already a user?
          </span>
        </form>
      </div>
    </div>
  );
};
export default Signup;
