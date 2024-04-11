"use client"

import Image3 from "@/public/images/jawa.svg";
import Image2 from "@/public/images/kalimantan.svg";
import Image4 from "@/public/images/papua.svg";
import Image5 from "@/public/images/sulawesi.svg";
import Images from "@/public/images/sumatera.svg";
import React, { useEffect, useState } from "react";

import ErrorMessage from "@/components/ErrorMessage";
import { useAuthSignInFormik } from "@/components/Validation/useAuthSignInFormik";
import { authSignOut } from "@/redux/authSlice";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SignIn: React.FC = () => {

  const dispatch = useDispatch()

  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    dispatch(authSignOut())
  }, [])

  const handleErrorMessage = (error: string) => {
      setError(error)
      setLoading(false)
  }

  const handleResponse = (response: number) => {
    if(response === 200) {
      setLoading(false)
    }
  }
  
  const signInFormik = useAuthSignInFormik({
    onError: handleErrorMessage,
    onResponse: handleResponse
  })

  return (
    <div className="flex w-screen flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full h-screen border-r border-r-slate-300 bg-white border-stroke dark:border-strokedark w-[100vw] md:w-[35vw] xl:border-l-2">
        <div className="w-full h-full flex justify-center flex-col p-4 sm:p-12.5 xl:p-17.5">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            ecoDashboard
          </h2>

          {
            error !== '' ? (
              <ErrorMessage error={'Email/password tidak sesuai!'} />
            ):
              null
          }

          <form onSubmit={signInFormik.handleSubmit}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={signInFormik.values.email}
                  id="email"
                  onChange={signInFormik.handleChange}
                  onBlur={signInFormik.handleBlur}
                  placeholder="example@diskominfo.com"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />

                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  value={signInFormik.values.password}
                  id="password"
                  onChange={signInFormik.handleChange}
                  onBlur={signInFormik.handleBlur}
                  placeholder="example: 125***dshdg"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />

                <span className="absolute right-4 top-4">
                  {
                    show ? (
                      <FaEyeSlash className="text-[red] relative top-[4px] text-[20px]" onClick={() => setShow(!show)} />
                    ):
                      <FaEye className="text-blue-500 relative top-[4px] text-[20px]" onClick={() => setShow(!show)} />
                  }
                </span>
              </div>
            </div>

            <div className="mb-5">
              <button type="submit" onClick={() => setLoading(true)} className={`w-full rounded-lg flex items-center justify-center border border-primary ${loading ? 'bg-slate-300 text-slate-400 cursor-not-allowed' : 'bg-primary text-white cursor-pointer hover:bg-opacity-90 active:scale-[0.99]'} p-4 transition`}>
                { loading ? <FaSpinner className="mr-3 animate-spin duration-100" /> : null} Masuk sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative w-[65%] h-screen overflow-hidden hidden md:flex items-center justify-center p-4">
        <Image 
          src={Images}
          className="absolute left-0 top-0 rotate-[35deg] scale-[1.4]"
          alt="image auth"
        />
        <Image 
          src={Image2}
          className="absolute left-0 bottom-0 rotate-[35deg] scale-[1.4]"
          alt="image auth"
        />
        <Image 
          src={Image3}
          className="absolute left-[28%] top-[45%] rotate-[35deg] scale-[1.4]"
          alt="image auth"
        />
        <Image 
          src={Image4}
          className="absolute right-0 bottom-0 rotate-[35deg] scale-[1.4]"
          alt="image auth"
        />
        <Image 
          src={Image5}
          className="absolute right-0 top-[-50px] rotate-[35deg] scale-[1.4]"
          alt="image auth"
        />
      </div>
    </div>
  );
};

export default SignIn;
