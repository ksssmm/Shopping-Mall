import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); 

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);


      navigate("/login"); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box p-4 border">
        <h2>Register</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p className="error">{error}</p>}
        <button className="btn btn-dark" onClick={handleRegister}>
          가입
        </button>
        <p>
          계정을 있으시면 여기서<Link to="/login" className='text-decoration-none'> 로그인 </Link>하세요
        </p>
      </div>
    </div>
  );
};

export default Register;
