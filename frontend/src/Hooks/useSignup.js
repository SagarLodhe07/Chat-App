import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setauthuser}=useAuthContext()
  const signup = async ({
    fullname,
    username,
    mobileNumber,
    gender,
    password,
    confirmpassword,
  }) => {
    const successResponse = handleInput({
      fullname,
      username,
      mobileNumber,
      gender,
      password,
      confirmpassword,
    });

    if (!successResponse) {
      return false;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          mobileNumber,
          gender,
          password,
          confirmpassword,
        }),
      });
      const data = await response.json();

      console.log(data);
      
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user-info",JSON.stringify(data))
      setauthuser(data)
    
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

function handleInput({
  fullname,
  username,
  mobileNumber,
  gender,
  password,
  confirmpassword,
}) {
  if (
    !username ||
    !password ||
    !confirmpassword ||
    !fullname ||
    !gender ||
    !mobileNumber
  ) {
    toast.error("All fields are required");
    return false;
  }

  if (password != confirmpassword) {
    toast.error("Password doesn't match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password should be at least 8 characters long");
    return false;
  }
  return true;
}
