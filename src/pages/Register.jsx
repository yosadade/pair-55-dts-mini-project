import React, { useState } from "react";
import { onHandleSignUpWithEmailAndPassword } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onHandleSignUp = async () => {
    await onHandleSignUpWithEmailAndPassword(email, password);
    setForm({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/6 bg-[#FFFFFF]  h-screen items-center justify-center">
        <p>Sign Up Section</p>
        <img src="../assets/ProfilePicture.png" alt="img" />
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
            className="bg-[#111111] w-3/6 p-3 mb-5 flex-1 border border-[#404040] placeholder:text-[#404040] placeholder:tracking-widest placeholder:font-bold"
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
          className="bg-[#E50913] w-3/6 p-3 font-bold tracking-widest"
          onClick={onHandleSignUp}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
