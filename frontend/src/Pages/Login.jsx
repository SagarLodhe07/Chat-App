import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin.js";

const Login = () => {
  const { login, loading } = useLogin();

  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(mobileNumber, password);
  };
  return (
    <div className="min-w-96 mx-auto flex flex-col justify-center items-center">
      <div className="bg-gray-200 shadow-lg w-1/2 p-6 rounded-md">
        <div className="flex justify-center items-center gap-8">
          <img src={"/chat.svg"} alt="logo" className="size-10" />
          <h1 className="text-blue-600 text-2xl font-bold text-center">
            Chatter App
          </h1>
        </div>
        <form className="mt-5" onSubmit={handleLoginSubmit}>
          <label>
            {" "}
            <span className="text-xl text-slate-700 font-bold">
              Mobile Number
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setmobileNumber(e.target.value)}
            className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
          />
          <label>
            <span className="text-xl  text-slate-700 font-bold"> Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
          />
          <button
            className="btn mt-4 btn-block btn-sm text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              "Login"
            )}
          </button>
          <span className="px-4 text-slate-600">New at Chatter ?</span>{" "}
          <Link to={"/signup"} className=" text-sky-600 hover:underline">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
