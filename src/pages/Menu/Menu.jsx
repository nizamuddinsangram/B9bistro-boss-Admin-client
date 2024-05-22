import { Helmet } from "react-helmet-async";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../component/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuImage} title="Our Menu" />
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offered"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered} title={"Offered"} coverImg={dessertImage} />
      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        coverImg={dessertImage}
        title={"desserts"}
      />
      {/* pizza */}
      <MenuCategory title={"pizza"} items={pizza} coverImg={pizzaImage} />
      <MenuCategory title={"salad"} items={salad} coverImg={saladImage} />
      <MenuCategory title={"soup"} items={soup} coverImg={soupImage} />
    </div>
  );
};

export default Menu;
