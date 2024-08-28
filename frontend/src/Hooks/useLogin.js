import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setauthuser } = useAuthContext();

  const login = async (mobileNumber, password) => {
    const successResponse = handleInput(mobileNumber, password);

    if (!successResponse) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ mobileNumber, password }),
      });
      const data = await res.json();

      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("user-info", JSON.stringify(data));

      setauthuser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;

function handleInput(mobileNumber, password) {
  if (!password ) {
    toast.error("Password is required");
    return false;
  }
  if (!mobileNumber) {
    toast.error("Mobile Number is required");
    return false;
  }
  return true;
}
