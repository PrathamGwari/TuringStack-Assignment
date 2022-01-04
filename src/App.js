import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  const {isAuthenticated, loggedInEmail} = props

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to={`/dashboard/?email=${loggedInEmail}`}/> : <Login></Login>}/>
          <Route path="/signup" element={isAuthenticated ? <Navigate to={`/dashboard/?email=${loggedInEmail}`}/> : <SignUp></SignUp>}/>
          <Route path="/home" element={isAuthenticated ? <Home></Home> : <Navigate to='/login'/>} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard></Dashboard> : <Navigate to="/login"/>} />
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
      </Router>
    </>
  );
}

const mapStateToProps = (state)=>{
  return{
    isAuthenticated: state.isAuthenticated,
    loggedInEmail: state.loggedInEmail
  }
}

export default connect(mapStateToProps, null)(App);
