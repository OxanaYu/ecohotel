import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Activate = () => {
  const [email, setEmail] = useState("");
  const [activationCode, setActiovationCode] = useState("");
  const { handleActivate, error } = useAuth();

  const handleSave = () => {
    if (!activationCode.trim()) {
      alert("Заполните все поля / All details are required");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("activation_code", activationCode);
      handleActivate(formData);
      console.log(formData);
    }
  };

  return (
    <div className="py-24 mb-36  flex flex-col items-center justify-center w-full h-screen ">
      {/* personal details */}

      <div className="bg-white px-10 py-11 mt-56 w-[500px] rounded-2xl border-2 border-gray-200">
        {/* Sign in section */}
        <div className="flex flex-row items-center justify-center lg:justify-start">
          <p className=" text-center mb-0 me-4 text-green/100 font-bold text-lg">
            Enter your email and activation code you received at that email
          </p>
        </div>

        <div className="mt-4">
          <div>
            {/* <label className="font-secondary">Last name</label> */}
            <input
              type="email"
              className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="font-secondary">Email</label> */}
            <input
              type="text"
              className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
              placeholder="Activation code"
              onChange={(e) => setActiovationCode(e.target.value)}
            />
          </div>
        </div>

        {/* right email and password */}

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleSave}
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green text-white text-lg font-secondary"
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activate;
