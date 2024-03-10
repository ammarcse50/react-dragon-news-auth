import React from "react";
import { AuthContext } from "../Shared/providers/AuthProvider";
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then(
        result=>{
            console.log('logout successfull')
            console.log(result.user)
        }
    ).then(error=>{
        console.log(error.message)
    });
  };


  const hanldeRegister = (e) => {
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar> </Navbar>

      <form onSubmit={hanldeRegister} className="card-body mx-auto  lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
 
    </>
  );
};

export default Register;
