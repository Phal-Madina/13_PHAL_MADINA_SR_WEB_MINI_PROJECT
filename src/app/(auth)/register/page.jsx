import React from "react";

import Image from "next/image";
import logo from "../../../../public/assets/icons/logo.svg";
import register from "../../../../public/assets/icons/sign-up.svg"
import { registerAction } from "@/action/registerAction";

const RegisterFormPage = () => {
  return (
    <div className="w-[70%] h-screen m-auto">
      <div className="h-[500px] bg-gray-100 text-gray-900 flex justify-center mt-[100px]">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 ">
          <div className=" xl:w-7/12 p-6 relative">
            <Image
              src={logo}
              alt="login form image"
              className="absolute left-[25px] top-0 "
            />
            <div className="flex flex-col items-center mt-[20px]">
              <form className="w-full flex-1 mt-8" action={registerAction}>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="firstName"
                    >
                      First Name :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="firstname"
                      placeholder="Enter your name.."
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="lastName"
                    >
                      Last Name :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Enter your name.."
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Email :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      name="email"
                      placeholder="info@xyz.com"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="password"
                    >
                      Password :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="text"
                      name="password"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="gender"
                    >
                      Gender :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="gender"
                      type="text"
                      name="gender"
                      placeholder="gender"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="profile_url"
                    >
                      Profile_Url :
                    </label>
                    <input
                      className="w-[230px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="profile_url"
                      type="text"
                      name="profile_url"
                      placeholder="profile"
                    />
                  </div>
                </div>
                <div>
                  <button className=" bg-indigo-500 text-white w-[100px] h-[40px] text-center rounded-[40px]" type="submit">
                  Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div className=" w-full  bg-center bg-no-repeat">
              <Image src={register}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormPage;
