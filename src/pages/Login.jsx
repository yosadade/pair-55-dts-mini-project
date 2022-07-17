import React, { useState } from "react";
import { onHandleSignInWithEmailAndPassword } from "../authentication/firebase";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onHandleSignIn = () => {
    onHandleSignInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex  h-screen">
      <div className="w-3/6 bg-[#FFFFFF] h-screen items-center justify-center">
        <p>Sign In Section</p>
      </div>
      <div className="w-3/6 p-5 flex-col bg-[#000000] text-white h-screen">
        <div className="items-center justify-center">
          <input
            className="bg-[#111111] w-3/6 p-3 mb-3 flex-1 border border-[#404040] placeholder:text-[#404040] placeholder:tracking-widest placeholder:font-bold"
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <input
            className="bg-[#111111] w-3/6 p-3 mb-4 flex-1 border border-[#404040] placeholder:text-[#404040] placeholder:tracking-widest placeholder:font-bold"
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button
          className="bg-[#E50913] w-3/6 p-3 font-bold tracking-widest"
          onClick={onHandleSignIn}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
