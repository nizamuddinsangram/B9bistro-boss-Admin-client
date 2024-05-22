import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const getData = async () => {
    const { data } = await axiosSecure(`/users/admin/${user?.email}`);
    console.log(data);
    return data.admin;
    // return data.admin
  };

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: getData,
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
