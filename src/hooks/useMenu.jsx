import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxiosPublic from "./useAxiosPublic";
const MenuCategory = () => {
  const axiosPublic = useAxiosPublic();
  const getData = async () => {
    const { data } = await axiosPublic.get("/menu");
    // const { data } = await axios("http://localhost:8000/menu");

    console.log(data);
    return data;
  };
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getData,
  });

  return [menu, loading, refetch];
};

export default MenuCategory;

// const [menu, setMenu] = useState([]);

// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   const getData = async () => {
//     const { data } = await axios("http://localhost:8000/menu");
//     setMenu(data);

//     setLoading(false);
//   };
//   getData();
// }, []);
