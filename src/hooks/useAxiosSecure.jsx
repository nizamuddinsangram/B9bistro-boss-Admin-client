import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
import { AuthContext } from "../provider/AuthProvider";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in interceptor", error.response);
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          console.log("log out the user");
          logOut().then(() => {
            navigate("/login");
            console.log("user logged out");
          });
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
