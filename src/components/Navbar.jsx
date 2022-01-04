import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="container navbar navbar-expand-sm navbar-light border border-dark mt-3">
                <div class="container">
                    <a class="navbar-brand" href="#">HOME</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><b>SIGN UP</b></a>
                            </li>
                        </Link>

                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><b>LOGIN</b></a>
                            </li>
                        </Link>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
