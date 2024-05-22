import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const { name, image, price, recipe, _id } = item;
  const [, refetch] = useCart();
  const { user } = useAuth();
  const handleAddFoodCard = async () => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      const { data } = await axiosSecure.post("/carts", cartItem);
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "success",
          text: `${name} added successfully`,
          icon: "success",
          confirmButtonText: "Ok",
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "please login to your account",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddFoodCard}
            className="btn mb-2 btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
