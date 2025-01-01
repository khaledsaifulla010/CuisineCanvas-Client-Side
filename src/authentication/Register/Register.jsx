import Lottie from "lottie-react";
import registerLottie from "../../../public/registerLottie.json";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div>
      <div className="w-[1200px] ml-28 rounded-xl mt-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 -mb-4 p-8 ml-[500px]">
          Please Register
        </h1>
        <div className="flex items-center justify-center mb-36 mt-12">
          {/* Lottie Animation */}
          <div>
            <Lottie
              className="w-[500px]"
              animationData={registerLottie}
            ></Lottie>
          </div>

          {/* Registration Card */}
          <div className="card bg-base-100 border w-[600px] shadow-lg transition-all hover:shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                />
                {errors.name && (
                  <span className="text-red-600 font-semibold">
                    This field is required!
                  </span>
                )}
              </div>
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    This field is required!
                  </span>
                )}
              </div>
              {/* Photo URL Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo_URL"
                  {...register("photo_URL", { required: true })}
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                />
                {errors.photo_URL && (
                  <span className="text-red-600 font-semibold">
                    This field is required!
                  </span>
                )}
              </div>
              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  })}
                  placeholder="Enter Your Password"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute w-12 right-3 top-[56px] transition duration-300 ease-in-out hover:scale-105"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <span className="text-red-600 font-semibold">
                    This field is required!
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 font-semibold">
                    Atleast one Uppercase, one Lowercase Letter & minimum Six
                    Characters!
                  </span>
                )}
              </div>
              {/* Login Link */}
              <div className="flex items-center gap-2 p-2 mt-4">
                <h1 className="font-bold text-slate-600 text-base">
                  Want To Login?
                </h1>
                <Link to={"/login"}>
                  <h1 className="font-bold text-purple-600 text-base underline hover:text-purple-800 transition duration-300">
                    Login
                  </h1>
                </Link>
              </div>
              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="border p-2 w-full rounded-xl text-indigo-950 bg-indigo-100 border-indigo-200 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
