import { useRef, useState, useEffect } from "react";
import axios from "axios";
// import axios from './api/axios';
// const LOGIN_URL = '/auth';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(""); // error we might get back when trying to authenticate
  const [success, setSuccess] = useState(false);
  // use router to navigate to page after successful log in,
  // delete success state

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     // LOGIN_URL,
    //     JSON.stringify({ user, pwd }), // what api is expecting
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    // console.log(JSON.stringify(response));
    // token coming from backend
    // const accessToken = response?.data?.accessToken;
    // array of roles?
    // const roles = response?.data?.roles;
    // setAuth({ user, pwd, roles, accessToken });
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);

    // } catch (err) {
    //   if (!err?.response) {
    // if error but no response, set error message
    //   setErrMsg("No Server Response");
    // } else if (err.response?.status === 400) {
    //   setErrMsg("Missing Username or Password");
    // } else if (err.response?.status === 401) {
    //   setErrMsg("Unauthorized");
    // } else {
    //   setErrMsg("Login Failed");
    // }
    // errRef.current.focus();
    // }
  };

  // jsx for the form
  return (
    <>
      {/* terinary, checks the success state, if user able to log in  */}
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/* placeholder link, go to home */}
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        // if success is false, show the rest of our form
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account? <br />
            <span className="line">
              {/* put router link here for sign up form */}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
