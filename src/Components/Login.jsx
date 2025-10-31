import { use, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import User from "./User";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Conditon from "./Condition.json";

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  //   USE STATE IS HERE
  const [choose, setchoose] = useState("error");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [passwordtype, setpasswordType] = useState(false);
  console.log(passwordtype);
  const navigate = useNavigate();

  // for Errors
  const namePattern = new RegExp(Conditon.nameRegex);
  const mobilePattern = new RegExp(Conditon.mobileRegex);
  const passwordPattern = new RegExp(Conditon.passwordRegex);
  const emailPattern = new RegExp(Conditon.emailRegex);

  const isValidName = namePattern.test(name);
  const isValidContact = mobilePattern.test(contact);
  const isValidEmail = emailPattern.test(email);
  const isValidPassword = passwordPattern.test(password);

  const submitHandle = () => {
    if (
      Home != "" &&
      email != "" &&
      contact != "" &&
      password != "" &&
      choose != ""
      
    ) {
      localStorage.setItem("choose", choose);
    } else if (choose == "User") {
      navigate("/User");
      return
    } else if (choose == "Home") {
      navigate("/Home");
      return
    } else {
      alert("failer");
    }
  };

  // localStorage.clear()

  return (
    <>
      {/* code for login page start here */}
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-md-6 col-12" data-aos="fade-down">
            <img
              src="public\login.png"
              alt="LOGIN PAGE IMAGE IS HERE"
              className="img-fluid"
            />
          </div> */}

          <div className="col-md-6 col-12" data-aos="flip-left">
            <form
              className="form-container"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="text-center">
                <h1 className="fw-bold ">Login</h1>
                <p className="p  fw-medium">
                  Enter your credentails to access your account
                </p>
              </div>

              <div className="form-row">
                <div className="form-group py-2">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <p
                    className={`text-danger m-0 fw-semibold ${
                      isValidName || name == "" ? "d-none" : "d-flex"
                    }`}
                  >
                    Use only alphabets
                  </p>
                </div>

                <div className="form-group col-12 py-2">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <p
                    className={`text-danger m-0 fw-semibold ${
                      isValidEmail || email == "" ? "d-none" : "d-flex"
                    }`}
                  >
                    Follow actual email pattern
                  </p>
                </div>
                <div className="form-group col-12 py-2 position-relative">
                  <label htmlFor="inputPassword4">Password</label>

                  <input
                    type={passwordtype ? "text" : "password"}
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <button
                    className={`password-icon fs-6 ${
                      !passwordtype ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
                    }`}
                    onClick={() => setpasswordType(!passwordtype)}
                  ></button>

                  <p
                    className={`text-danger m-0 fw-semibold ${
                      isValidPassword || password == "" ? "d-none" : "d-flex"
                    }`}
                  >
                    Max 6 digits
                  </p>
                </div>
              </div>

              <div className="form-group py-2">
                <label htmlFor="inputContact">Contact</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputContact"
                  onChange={(e) => setcontact(e.target.value)}
                />
                <p
                  className={`text-danger m-0 fw-semibold ${
                    contact == "" || isValidContact ? "d-none" : "d-flex"
                  }`}
                >
                  Max 10 digits{" "}
                </p>
              </div>

              <div className="form-group col-md-12 py-2">
                <label htmlFor="inputState">Choose Route</label>
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(e) => setchoose(e.target.value)}
                >
                  <option defaultValue value="">
                    Choose...
                  </option>
                  <option value="User">User</option>
                  <option value="Home">Home</option>
                </select>
                <p
                  className={`text-danger m-0 fw-semibold ${
                    choose == "error" ? "d-none" : ""
                  }`}
                >
                  You choose {choose} router!!!
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-1 sumbit-btn"
                onClick={submitHandle}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
