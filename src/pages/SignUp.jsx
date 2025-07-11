import { useForm } from "react-hook-form";
import { Link } from "react-router";

import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero bg-base-200 min-h-screen text-black">
      <div className="card bg-base-100 w-full max-w-sm mt-20 shadow-2xl">
        <div>
          <h3 className="text-4xl text-center pt-12 pb-2">Create an Account</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <p>
            Already Have an Account ?{" "}
            <Link className="text-blue-600" to={"/login"}>
              Login
            </Link>{" "}
            Here
          </p>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
