import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUpPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to create a new user (make sure the endpoint is correct)
      const res = await axios.post("http://localhost:8080/api/auth/signup", form);
      // console.log(res);
      localStorage.setItem("token", res.data.token); // Store the token
      alert("User creation successful");

      navigate("/signin"); // After signup, navigate to the Sign In page
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUpPage;
