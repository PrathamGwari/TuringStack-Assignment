import React from "react";
import "./pages.css";
import Navbar from "../Navbar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SignUp(props) {
  const userExists = (email) => {
    return localStorage.getItem(email) === null ? false : true
  }
  const clickHandler = (e) => {
    e.preventDefault();
    let password = document.querySelector("#password-input").value;
    let confirmPassword = document.querySelector(
      "#confirm-password-input"
    ).value;
    if (password.length <= 3) {
      return alert("password should contain more than 3 characters");
    }
    if (password !== confirmPassword) {
      return alert("password and confirm password do not match");
    }
    if (userExists(document.querySelector("#email-input").value)) {
      return alert("User with this email already exists. Try loggin in");
    }
    const userData = JSON.stringify({
        name: document.querySelector('#name-input').value,
        password: document.querySelector('#password-input').value
    })
    localStorage.setItem(document.querySelector('#email-input').value, userData)
    props.registerUser(document.querySelector('#email-input').value)
    props.changeIsAuth(true)
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="row form-root my-5">
        <div className="col d-flex justify-content-center align-content-center">
          <form
            action="#"
            className="form-container py-2 px-5 my-auto border border-dark"
          >
            <h4 className="my-3">Sign Up</h4>
            <hr />

            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="name-input"
            />

            <label htmlFor="email-input" className="form-label mt-3">
              Email
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email-input"
            />

            <label htmlFor="password-input" className="form-label mt-3">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="password-input"
            />

            <label htmlFor="confirm-password-input" className="form-label mt-3">
              Confirm Password
            </label>
            <input
              required
              type="password"
              className="form-control mb-3"
              id="confirm-password-input"
            />

            <button
              type="submit"
              onClick={clickHandler}
              className="btn btn-info text-white my-3"
            >
              SIGN UP
            </button>
            <hr />
            <h6>Already signed up?</h6>
            <Link to="/login"><button className="btn btn-info text-white my-3">LOGIN</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeIsAuth: (val)=>{ dispatch({type:'CHANGE_IS_AUTHENTICATED', payload: val}) },
    registerUser: (email)=>{ dispatch({type: 'REGISTER', payload: email}) }
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
