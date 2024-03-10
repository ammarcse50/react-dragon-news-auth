import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Shared/providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("login succesfull");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar> </Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="ml-4">
              Dont’t Have An Account ?{" "}
              <NavLink to="/register"> Register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
