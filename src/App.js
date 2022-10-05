import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import logo from './images/yt.svg'

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return(
    <div className='bgi'>
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand> <img src={logo} alt="Code Runners Logo" height="60" width="100" /></NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
                <span className="navbar-text">
            PartyBox 
          </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <form onSubmit={handleSubmit}>
        <label>Enter Youtube link: 
        <br></br>
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
            
      />
        </label>
        <br></br>
          <input type="submit" />
      </form>

      <body className='form'>
        Queue:
      </body>
    </div>
  );
}

export default App;
