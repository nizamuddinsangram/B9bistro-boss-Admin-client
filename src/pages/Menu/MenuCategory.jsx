import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItems from "../Shared/MenuItems";
const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      <Cover img={coverImg} title={title} />

      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        {" "}
        <button className="btn mb-2 btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
