import axios from "axios";
import { useEffect, useState } from "react";
const MenuCategory = () => {
  const [menu, setMenu] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:8000/menu");
      setMenu(data);

      setLoading(false);
    };
    getData();
  }, []);
  return [menu, loading];
};

export default MenuCategory;
