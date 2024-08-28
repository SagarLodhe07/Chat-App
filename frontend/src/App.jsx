import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const { authuser } = useAuthContext();
  return (
    <div className="p-5 bg-slate-600 h-screen flex justify-center items-center shadow shadow-slate-700">
      <Routes>
        <Route
          path="/"
          element={authuser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authuser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authuser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
