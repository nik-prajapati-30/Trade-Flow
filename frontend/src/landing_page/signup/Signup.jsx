// import React from 'react';
// function Signup() {
//     return ( 
//         <form>
//             {/* <input placeholder='username'>Username</input> */}
            
//         </form>
//      );
// }

// export default Signup;
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/signup", form);
      alert("Signup successful!");
      navigate("/login"); // redirect to login
    } catch (err) {
  console.log("Signup error:", err);
  console.log("Response:", err.response);
  console.log("Response data:", err.response?.data);

  alert(
    err.response?.data?.message ||
    err.response?.data ||
    "Signup failed"
  );
}
  };

  return (
//     <div>
//       <h2>Signup Page</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <br />

//         <button type="submit">Register</button>
//       </form>

//       <p>
//         Already registered? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }
<div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow" style={{ minHeight: "400px" }}>
            <div className="card-body">
              <h4 className="text-center mb-4">Create Account</h4>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Sign Up
                </button>
              </form>

              <p className="text-center mt-3 mb-0">
                Already registered?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Signup;