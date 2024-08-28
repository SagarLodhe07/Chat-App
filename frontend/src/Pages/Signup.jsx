import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../Hooks/useSignup.js";

const Signup = () => {
  // const navigate = useNavigate()
  const [inputs, setinputs] = useState({
    fullname: "",
    username: "",
    mobileNumber: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });
  const { signup, loading } = useSignup();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // navigate('/login')
  };

  return (
    <div className="min-w-96 mx-auto flex flex-col justify-center items-center">
      <div className="bg-gray-200 shadow-lg w-full p-6 rounded-md">
        <div className="flex justify-center items-center gap-8">
          <img src={"/chat.svg"} alt="logo" className="size-10" />
          <h1 className="text-blue-600 text-2xl font-bold text-center">
            Chatter App
          </h1>
        </div>
        <form className="mt-5" onSubmit={handleSignup}>
          <div>
            <label>
              {" "}
              <span className="text-xl text-slate-700 font-bold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Jon Doe"
              value={inputs.fullname}
              onChange={handleInputChange}
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label>
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="admin@2"
              value={inputs.username}
              onChange={handleInputChange}
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label>
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Mobile Number
              </span>
            </label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter your 10 digit moblie number"
              value={inputs.mobileNumber}
              onChange={handleInputChange}
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label>
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={handleInputChange}
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>
          <div>
            <label>
              <span className="text-xl  text-slate-700 font-bold">
                {" "}
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="confirm password"
              value={inputs.confirmpassword}
              onChange={handleInputChange}
              className="w-full bg-white outline-none rounded-sm mt-2 p-2 text-slate-600"
            />
          </div>

          {/* Gender Field */}

          <div className="flex">
            {["Male", "Female"].map((gender) => (
              <div className="form-control" key={gender}>
                <label className={`label gap-2 cursor-pointer`}>
                  <span className="label-text text-md text-slate-700">
                    {gender}
                  </span>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={inputs.gender === gender}
                    onChange={handleInputChange}
                    className="radio border-slate-600"
                  />
                </label>
              </div>
            ))}
          </div>

          <button
            className="btn mt-4 btn-block btn-sm text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Register"}
          </button>
          <span className="px-4 text-slate-600  hover:text-slate-900">
            Already a user?
          </span>
          <Link to={"/login"} className="text-sky-600 hover:underline">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
