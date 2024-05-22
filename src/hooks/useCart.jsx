import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const getData = async () => {
    const { data } = await axiosSecure(`/carts?email=${user?.email}`);
    return data;
  };

  //load tan stack query
  const {
    refetch,
    data: cart = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: getData,
  });
  return [cart, refetch];
};

export default useCart;
