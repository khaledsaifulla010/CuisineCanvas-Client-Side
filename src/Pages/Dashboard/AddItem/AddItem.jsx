import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(image_hosting_api);

const AddItem = () => {

    const axiosPublic= useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    //image upload to imagebband then get an url
    const imageFile = {image: data.image[0]}
const res = await axiosPublic.post(image_hosting_api, imageFile, {
  headers: {
    "content-type": "multipart/form-data",
  },
});
console.log(res.data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-bold">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("recipeName", { required: "Recipe name is required" })}
            placeholder="Recipe name"
            className="input input-bordered w-full"
          />
          {errors.recipeName && (
            <span className="text-red-500 text-sm">
              {errors.recipeName.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Category*</span>
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="select select-bordered w-full"
            >
              <option value="" disabled selected>
                Category
              </option>
              <option value="Dessert">Dessert</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              placeholder="Price"
              className="input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-bold">Recipe Details*</span>
          </label>
          <textarea
            {...register("details", {
              required: "Recipe details are required",
            })}
            placeholder="Recipe Details"
            className="textarea textarea-bordered w-full"
          ></textarea>
          {errors.details && (
            <span className="text-red-500 text-sm">
              {errors.details.message}
            </span>
          )}
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-bold">Upload File</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "File is required" })}
            className="file-input file-input-bordered w-full"
          />
          {errors.file && (
            <span className="text-red-500 text-sm">{errors.file.message}</span>
          )}
        </div>

        <div className="form-control">
          <button
            type="submit"
            className="btn bg-amber-700 text-white flex items-center gap-2"
          >
            Add Item <FaUtensils />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
