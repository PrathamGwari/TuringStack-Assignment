import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";

function Dashboard(props) {
  const {search} = useLocation()
  const data = JSON.parse(localStorage.getItem(search.slice(7)))

  const handleClick = ()=>{
    props.changeIsAuth(false)
  }
  return (
    <>
      <nav class="container navbar navbar-expand-sm navbar-light border border-dark mt-3">
        <div class="container">
          <a class="navbar-brand" href="#">
            DASHBOARD
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <span class="nav-link">
                  <b>Hi {data.name}</b>
                </span>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" onClick={handleClick}>
                  <b>LOGOUT</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeIsAuth: (val)=>{ dispatch({type:'CHANGE_IS_AUTHENTICATED', payload: val}) }
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
