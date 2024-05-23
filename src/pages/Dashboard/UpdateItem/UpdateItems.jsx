import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../component/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_Hosting_key = import.meta.env.VITE_imageHosting;
const image_Hosting_api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`;
const UpdateItems = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  console.log(name);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // const imageFile = new FormData();
    // imageFile.append("image", data.image[0]);
    //image upload to img_bb and  then an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_Hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const response = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(response?.data);
      if (response?.data?.modifiedCount > 0) {
        console.log("added data by admin ");
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    // console.log("with image url ", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">Update menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
