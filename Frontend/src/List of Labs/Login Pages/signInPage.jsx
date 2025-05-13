import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignInPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      const token = localStorage.getItem("token");
      console.log(token);
      fetch("/api/labs/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => res.json())
      .then(data => console.log(data));
       // ✅ Redirect to home
    } catch (err) {
      alert(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Sign In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default SignInPage;
