import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar";

function Login(props) {
  
  const userExists = (email) => {
    return localStorage.getItem(
      email
    ) === null
      ? false
      : true;
  }

  const clickHandler = () => {
    if (userExists(document.querySelector("#email-input").value)) {
      const {password} = JSON.parse(localStorage.getItem(document.getElementById('email-input').value))
      
      if(password === document.getElementById('password-input').value){
        props.loginUser(document.getElementById('email-input').value)
        props.changeIsAuth(true)
      } else{
        alert('Wrong id or password ')
      } 
    } else {
      alert("Wrong credentials or you have not registered");
      <Navigate to="/login"/>
    }
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="row form-root">
        <div className="col d-flex justify-content-center align-content-center">
          <form
            className="form-container py-2 px-5 my-auto border border-dark"
          >
            <h4 className="my-3">LOGIN</h4>
            <hr />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email-input"
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input required type="password" className="form-control" id="password-input"/>

            
            <button
              className="btn btn-info text-white my-3"
              onClick={clickHandler}
            >
              LOGIN
            </button>
            
            <hr />
            <h6>New User?</h6>
            <Link to="/signup"><button className="btn btn-info text-white my-3">SIGN UP</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeIsAuth: (val)=>{ dispatch({type:'CHANGE_IS_AUTHENTICATED', payload: val}) },
    loginUser: (email)=>{ dispatch({type: 'LOGIN', payload: email}) }
  }
}

export default connect(null, mapDispatchToProps)(Login);
