import React, { useState } from "react";
import FloatingLabel from "../components/FloatingLabel";

function Register() {
  const [active, setActive] = useState(false);

  return (
    <div className="px-6 mt-4 flex flex-col gap-4">
      <h2 className="text-xl">CREATE RAZER ACCOUNT</h2>
      <FloatingLabel text="email address" type="text" />
      <FloatingLabel text="password" type="password" />
      <button className="uppercase text-[#222] bg-[color:var(--cx-color-primary)] opacity-30 py-2.5 rounded-sm text-sm font-medium mt-3">
        log in
      </button>
      <p className="text-[#ccc] place-self-center text-sm">
        Already have an account ?
      </p>
      <p className="text-[#ccc] place-self-center text-lg cursor-pointer hover:text-[color:var(--cx-color-primary)]">
        Log in{" "}
        <span className="text-[color:var(--cx-color-primary)]">{">"}</span>
      </p>
    </div>
  );
}

export default Register;
