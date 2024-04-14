import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //register is a var & handleSubmit is a method
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(""); //for handling errors

  const login = async (data) => {
    setError(""); //basic practice that we clean the errors when the user submit the form
    try {
      const session = await authService.login(data); //this login is from the file auth.js which takes parameter email & password as the object parameter
      if (session) {
        const userData = await authService.getCurrentUser();
        //since we get the userData we have to dispatch now, we are checking the userData
        if (userData) dispatch(authLogin(userData)); //this authLogin is the login reducer from the file authSlic.js, the status 'll also get true
        //since the user has login now, so we should send him to another location. We are sending through navigate instead of Link bcoz when we use Link then the user has to click on it to go to another location, but when we use navigate then we send the user to another location programatically
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/* we have to pass a method to handleSubmit,which is an event handler. */}
        <form onSubmit={handleSubmit(login)} className="mt-8">   
            <div className="space-y-5">
                <Input 
                label='Email: '
                placeholder="Enter your Email"
                //since we are creating this input for email, so we have to pass email to the register
                type="email"
                {...register('email', {     
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}  
                />
                <Input 
                label='Password'
                type="password" 
                placeholder="Enter your Password"
                {...register('password', {
                    required: true,
                })}
                />
                <button type="submit" className="w-full">Sign In</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
