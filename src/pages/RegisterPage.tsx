import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabel from "../components/FloatingLabel";
import NavbarLogin from "../components/NavbarLogin";

function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setLogin(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <NavbarLogin />
      <div className="px-6 lg:px-[30%] mt-4 flex flex-col gap-4">
        <form className="flex flex-col gap-4">
          {" "}
          <h2 className="text-xl">CREATE RAZER ACCOUNT</h2>
          <FloatingLabel
            handleChange={handleChange}
            text="email address"
            type="email"
          />
          <FloatingLabel
            handleChange={handleChange}
            text="password"
            type="password"
          />
          <button
            disabled={!login || !password}
            className={`uppercase text-[#222] bg-[color:var(--cx-color-primary)]  py-2.5 my-2 rounded-sm text-sm font-medium `}
          >
            Sign up
          </button>
        </form>
        <p className="text-[#ccc] place-self-center text-sm">
          Already have an account ?
        </p>
        <Link
          to="/login"
          className="text-[#ccc] place-self-center text-lg cursor-pointer hover:text-[color:var(--cx-color-primary)]"
        >
          Log in{" "}
          <span className="text-[color:var(--cx-color-primary)]">{">"}</span>
        </Link>
      </div>
    </>
  );
}

export default Register;
