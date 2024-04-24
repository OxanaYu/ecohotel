import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Input, Ripple, initTWE } from "tw-elements";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { handleRegister, error } = useAuth();

  // useEffect(() => {
  //   initTWE({ Input, Ripple });

  //   const facebookButton = document.getElementById("facebook-button");
  //   facebookButton.addEventListener("mouseenter", handleMouseEnter);

  //   return () => {
  //     facebookButton.removeEventListener("mouseenter", handleMouseEnter);
  //   };
  // }, []);

  // const handleMouseEnter = () => {
  //   const facebookButton = document.getElementById("facebook-button");
  //   if (facebookButton) {
  //     facebookButton.setAttribute("data-twe-ripple-init", "");
  //     facebookButton.setAttribute("data-twe-ripple-color", "light");
  //   }
  // };

  const handleSave = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните все поля / All details are required");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
      console.log(formData);
    }
  };

  return (
    <div className="py-24 mb-36  flex flex-col items-center justify-center w-full h-screen ">
      {/* personal details */}

      <div className="bg-white px-10 py-11 mt-56 w-[500px] rounded-2xl border-2 border-gray-200">
        {/* Sign in section */}
        <div className="flex flex-row items-center justify-center lg:justify-start">
          <p className="mb-0 me-4 text-green/100 font-bold text-lg">
            Sign up with
          </p>

          {/* Facebook */}

          <button
            id="facebook-button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue/70 hover:shadow-primary focus:bg-blue/100 focus:shadow-primary/20 focus:outline-none focus:ring-0 active:bg-blue/100 active:shadow-primary/20"
          >
            <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </button>

          {/* google */}
          <button
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue/20 fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out  hover:bg-blue/70 hover:shadow-primary/5  focus:bg-blue/50 focus:shadow-primary/20 focus:outline-none focus:ring-0 active:bg-blue/50 active:shadow-primary-2"
          >
            <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                  fill="#EA4335"
                />
                <path
                  d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                  fill="#34A853"
                />
                <path
                  d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                  fill="#4A90E2"
                />
                <path
                  d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                  fill="#FBBC05"
                />
              </svg>
            </span>
          </button>

          {/* telegram */}
          <button
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue/70 hover:shadow-primary focus:bg-blue/100 focus:shadow-primary/20 focus:outline-none focus:ring-0 active:bg-blue/100 active:shadow-primary/20"
          >
            <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Telegram icon</title>
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Separator between social media sign in and email/password sign in  */}
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
            Or
          </p>
        </div>
        <div className="mt-4">
          <div>
            {/* <label className="font-secondary ">First name</label> */}
            <input
              type="text"
              className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="font-secondary">Last name</label> */}
            <input
              type="password"
              className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="font-secondary">Email</label> */}
            <input
              type="password"
              className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* right email and password */}

        <div>
          {/* <label className="font-secondary ">Phone number</label> */}
          <input
            type="text"
            className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
            placeholder="Phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          {/* <label className="font-secondary">Password</label> */}
          <input
            type="password"
            className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent placeholder-style"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {/* <label className="font-secondary">Confirm Password</label> */}
          <input
            type="password"
            className="w-full font-secondary border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparen placeholder-style"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleSave}
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green text-white text-lg font-secondary"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
