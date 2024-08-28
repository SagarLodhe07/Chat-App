import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

export const useLogout = () => {

  const [loading, setLoading] = useState(false);
  const { setauthuser } = useAuthContext();
  
  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-type": "application/json" },
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user-info");
      setauthuser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};
