import React from 'react'
import Button from '@mui/material/Button'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">QUIZ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              </li>
              {/* <li>
              <Button variant="outlined" color="error">
                  Logout</Button>
              </li> */}

            

               
            

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
