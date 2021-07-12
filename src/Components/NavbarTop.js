import { Nav, Navbar, NavDropdown } from "react-bootstrap"


function NavbarTop() {
return(
  <div className="Nav" >
  <Navbar bg="transparent" variant="dark"
      sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand href="/home">
      Recipe Finder
      </Navbar.Brand>
           <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
      <Nav>
          <Nav.Link href="/">Home</Nav.Link>   
          {/* <NavDropdown className="text-lght" title="Planets"> 
          <NavDropdown.Item href="/planets">All Planets</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/planet/Mercury">Mercury</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Venus">Venus</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Earth">Earth</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Mars">Mars</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Jupiter">Jupiter</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Saturn">Saturn</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Uranus">Uranus</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Neptune">Neptune</NavDropdown.Item>
          <NavDropdown.Item href="/planet/Pluto">Pluto</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/distance">Distance From the Sun</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/recipes">All Recipes</Nav.Link>
          <Nav.Link href="/countries">Countries</Nav.Link>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
</div>

)
}

export default NavbarTop



