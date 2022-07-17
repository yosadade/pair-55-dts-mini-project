import React, { useState } from "react";
import { onHandleSignUpWithEmailAndPassword } from "../authentication/firebase";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onHandleSignUp = () => {
    onHandleSignUpWithEmailAndPassword(email, password);
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex  h-screen">
      <div className="w-3/6 bg-[#FFFFFF] h-screen items-center justify-center">
        <p>Sign Up Section</p>
      </div>
      <div className="w-3/6 p-5 flex-col bg-[#000000] text-white h-screen">
        <div className="items-center justify-center">
          <input
            className="bg-[#111111] w-3/5 p-3 mb-3 flex-1 border border-slate-300 hover:border-indigo-300"
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <input
            className="bg-[#111111] w-3/5 p-3 mb-5 flex-1 border border-slate-300 hover:border-indigo-300 tracking-wide"
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        {/* <div>
          <input
            className="bg-[#111111] w-3/5 p-3 mb-5 flex-1 border border-slate-300 hover:border-indigo-300 tracking-wide"
            type="re-password"
            name="re-password"
            placeholder="RE-PASSWORD"
            value={repassword}
            onChange={() => {}}
          />
        </div> */}
        <button
          className="bg-[#E50913] w-3/5 p-3 font-semibold"
          onClick={onHandleSignUp}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
