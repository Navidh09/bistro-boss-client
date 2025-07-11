import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

// import lottifiles from "../../assets/lottifiles/Secure_Login.json";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captcha = useRef(null);
  const { signIn } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password).then((result) => {
      console.log(result.user);
    });
  };

  const handleValidateCaptcha = () => {
    const captchaValue = captcha.current.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captcha}
                placeholder="enter captcha"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              onClick={handleValidateCaptcha}
              className="btn btn-xs btn-outline hover:bg-black hover:text-white -mt-2"
            >
              Validate
            </button>
            <p>
              Don&apos;t Have an Account ?{" "}
              <Link to={"/signUp"} className="text-blue-700">
                Sign Up
              </Link>{" "}
              Now
            </p>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary btn-block"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
