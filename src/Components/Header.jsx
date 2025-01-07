import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const  location = useLocation()
    const navigateByUrl = useNavigate()
  return (
    <div>
       <Navbar expand="lg" className="bg-warning" fixed='top'>
      <Container>
        <Navbar.Brand href="/"><i class="fa-regular fa-user"></i> User Details</Navbar.Brand>
      </Container>
      { location.pathname==="/" && (<button onClick={()=>navigateByUrl('/adduser')} className=" btn btn-outline-dark me-3 ">Add User <i class="fa-solid fa-user-plus"></i></button>)}
    </Navbar>
    </div>
  )
}

export default Header
