import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';



function Header() {
  const [show,setshow] = useState(false)
  const handleshow=()=>{
    setshow(true)
  }
  const handlecancel=()=>{
    setshow(false)
  }
  const handleclose=()=>{
    setshow(false)
  }
  return (

    <>



{[ 'xxl'].map((expand) => (
       
          <Navbar key={expand} expand={expand} className="bg-body-light">
            <Container fluid>
              
                <Navbar.Brand href="#">
                  <Link to={'/'}>
                  <img src="https://www.galaxychocolate.co.in/sites/g/files/fnmzdf1911/files/galaxy.svg" alt="" className='w-50 ps-5 ' style={{height:'130px'}} /></Link>
              
              </Navbar.Brand>
              <Link to={'/ourstory'} class="no-underline">
              <Nav.Link href="#action2" style={{color:' rgb(110, 16, 16)', fontSize:'30px'}}>OUR STORY</Nav.Link>

              </Link>
              <Navbar.Toggle onClick={handleshow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={show}
                onHide={handleclose}
                backdrop="static"
                keyboard={false}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="https://www.galaxychocolate.co.in/sites/g/files/fnmzdf1911/files/galaxy.svg" alt="" className='w-50 ps-5' style={{height:'150px'}} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end  flex-grow-1 pe-3 pb-24">
                    <Link to={'/wheretobuy'} class="no-underline">
                    <Nav.Link href="#action1" onClick={handlecancel} style={{color:' rgb(110, 16, 16)', fontSize:'20px'}}>WHERE TO BUY</Nav.Link>

                    </Link>

                    <Link to={'/contact'} class="no-underline">
                    <Nav.Link href="#action2"  onClick={handlecancel} style={{color:' rgb(110, 16, 16)', fontSize:'20px'}}>CONTACTS</Nav.Link>
                    </Link>
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
       
      ))}
    
    
    
    
    
    
    
    </>
  )
}

export default Header







