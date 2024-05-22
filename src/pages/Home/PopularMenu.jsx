import SectionTitle from "../../component/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItems from "../Shared/MenuItems";
const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <span className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </span>
    </div>
  );
};

export default PopularMenu;
