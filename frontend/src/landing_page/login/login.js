import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/login", form);

      // If username & password match → redirect to dashboard
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
//     <div>
//       <h2>Login Page</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="username"
//           placeholder="Username"
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

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

<div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card shadow" style={{ minHeight: "300px" }}>
            <div className="card-body">
              <h4 className="text-center mb-4">Login</h4>

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

                <button type="submit" className="btn btn-success btn-block mt-3">
                  Login
                </button>
              </form>

               <p className="text-center mt-3 mb-0">
                              Don’t have an account?{" "}
                              <Link to="/Signup">sign up</Link>
                            </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;