import { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabel from "../components/FloatingLabel";
import NavbarLogin from "../components/NavbarLogin";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setLogin(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <NavbarLogin />
      <div className="px-6 mt-4 flex flex-col gap-4">
        <form className="flex flex-col gap-4">
          {" "}
          <h2 className="text-xl">RAZER LOGIN</h2>
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
          <p className="text-[#888] place-self-end mb-3 text-sm">
            Forgot password?
          </p>
          <button
            disabled={!login || !password}
            className={`uppercase text-[#222] bg-[color:var(--cx-color-primary)]  py-2.5 rounded-sm text-sm font-medium ${
              login && password !== "" ? "opacity-100" : "opacity-30"
            }`}
          >
            log in
          </button>
        </form>
        <p className="text-[#ccc] place-self-center text-sm">
          Don't have an account yet?
        </p>
        <Link
          to="/register"
          className="text-[#ccc] place-self-center text-lg cursor-pointer hover:text-[color:var(--cx-color-primary)]"
        >
          Create{" "}
          <span className="text-[color:var(--cx-color-primary)]">{">"}</span>
        </Link>
      </div>
    </>
  );
}

export default Login;
