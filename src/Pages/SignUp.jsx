import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
    }
  };

  // new form
  const handleMouseMove = (event) => {
    const password = document.getElementById('password');
    if (!password.matches(':focus') && !password.matches(':user-invalid')) {
      const eyes = document.getElementsByClassName('eye');

      for (let eye of eyes) {
        const x = eye.getBoundingClientRect().left + 10;
        const y = eye.getBoundingClientRect().top + 10;
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;

        eye.style.transform = `rotate(${rot}deg)`;
      }
    }
  };

  const handleFocusPassword = () => {
    document.getElementById('face').style.transform = 'translateX(30px)';
    const eyes = document.getElementsByClassName('eye');

    for (let eye of eyes) {
      eye.style.transform = 'rotate(100deg)';
    }
  };

  const handleFocusOutPassword = (event) => {
    document.getElementById('face').style.transform = 'translateX(0)';
    if (event.target.checkValidity()) {
      document.getElementById('ball').classList.toggle('sad');
    } else {
      document.getElementById('ball').classList.toggle('sad');
      const eyes = document.getElementsByClassName('eye');

      for (let eye of eyes) {
        eye.style.transform = 'rotate(215deg)';
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    const passwordField = document.getElementById('password');
    passwordField.addEventListener('focus', handleFocusPassword);
    passwordField.addEventListener('focusout', handleFocusOutPassword);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      passwordField.removeEventListener('focus', handleFocusPassword);
      passwordField.removeEventListener('focusout', handleFocusOutPassword);
    };
  }, []);

  const handleMouseOverSubmit = () => {
    document.getElementById('ball').classList.toggle('look_at');
  };

  const handleMouseOutSubmit = () => {
    document.getElementById('ball').classList.toggle('look_at');
  };

  // new form end

  return (
    <>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <section className="flex flex-row justify-center flex-wrap items-center gap-80 py-20">
          <section class="form text-xl">
            <div class="logo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>
            </div>
            <h1 class="form__title text-[#007FFF]">Log in to your Account</h1>
            <p class="form__description font-medium text-xl">Welcome back! Please, enter your information</p>

            <form>
              <label className="form-control__label">Email</label>
              <input type="email" className="form-control" />

              <label className="form-control__label">Password</label>
              <div className="password-field">
                <input type="password" className="form-control" minLength="4" id="password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
              <div className="password__settings">
                <label className="password__settings__remember">
                  <input type="checkbox" />
                  <span className="custom__checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  Remember me
                </label>

                <a href="#">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="form__submit"
                id="submit"
                onMouseOver={handleMouseOverSubmit}
                onMouseOut={handleMouseOutSubmit}
              >
                Log In
              </button>
            </form>
            <p class="form__footer">
              Don't have an account?<br /> <a href="#">Create an account</a>
            </p>
          </section>

          <section class="form__animation">
            <div id="ball">
              <div class="ball">
                <div id="face">
                  <div class="ball__eyes">
                    <div class="eye_wrap"><span class="eye"></span></div>
                    <div class="eye_wrap"><span class="eye"></span></div>
                  </div>
                  <div class="ball__mouth"></div>
                </div>
              </div>
            </div>
            <div class="ball__shadow"></div>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
