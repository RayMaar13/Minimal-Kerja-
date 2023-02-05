import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [registerInput, setRegisterInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: ""
  })

  //Register Change Handler
  const registerHandlerChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "email") {
      setRegisterInput({ ...registerInput, email: value });
    } else if (name === "password") {
      setRegisterInput({ ...registerInput, password: value });
    } else if (name === "name") {
      setRegisterInput({...registerInput, name: value})
    } else if (name === "image_url") {
      setRegisterInput({...registerInput, image_url: value})
    }

  };

  //Register handler
  const handleRegister = (event) => {
    event.preventDefault();

    let { email, password, image_url, name } = registerInput;

    if (email !== "" && password !== "" && image_url !== "" && name !== "") {
      axios
        .post(`https://dev-example.sanbercloud.com/api/register  `, {
          name,
          image_url,
          email,
          password,
        })
        .then((res) => {
          navigate("/login")
        });
    }

    else {
      alert("Please Fill The Input Correctly")
    }
  };


  return (
    <div className="container my-32 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 ">
          Minimal Kerja
        </h2>
        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 ">
          Welcome
        </h3>
        <p className="mt-1 text-center text-gray-500">
          Create Account
        </p>
        <form onSubmit={handleRegister}>
          <div className="w-full mt-4">
            <input
              defaultValue={registerInput.name}
              onChange={registerHandlerChange}
              name="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={registerInput.image_url}
              onChange={registerHandlerChange}
              name="image_url"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Image Url"
              aria-label="image_url"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={registerInput.email}
              onChange={registerHandlerChange}
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={registerInput.password}
              onChange={registerHandlerChange}
              minLength={8}
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600">
          Already Have Account's ?{" "}
        </span>
        <Link
          to={'/login'}
          className="mx-2 text-sm font-bold text-blue-500 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
