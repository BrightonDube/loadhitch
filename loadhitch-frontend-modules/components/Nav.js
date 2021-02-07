import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

const Navi = () => {
  const router = useRouter();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Link href="/" passHref>
          <Navbar.Brand>
            <h2>LOADHITCH</h2>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              href="/"
              passHref
              className={router.pathname == "/" ? "active" : ""}
            >
              <Nav.Link as="a" href="/">
                Home
              </Nav.Link>
            </Link>
            <Link
              href="/pricing"
              passHref
              className={router.pathname == "/pricing" ? "active" : ""}
            >
              <Nav.Link as="a" href="/pricing">
                Pricing
              </Nav.Link>
            </Link>
            <NavDropdown title="" id="collasible-nav-dropdown">
              <Link
                href="/services"
                passHref
                className={router.pathname == "/services" ? "active" : ""}
              >
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              </Link>
              <Link
                href="/careers"
                passHref
                className={router.pathname == "/careers" ? "active" : ""}
              >
                <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
              </Link>
              <Link
                href="/about"
                passHref
                className={router.pathname == "/about" ? "active" : ""}
              >
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              href="/register"
              passHref
              className={router.pathname == "/register" ? "active" : ""}
            >
              <Nav.Link href="/register">Sign up</Nav.Link>
            </Link>
            <Link
              href="/login"
              passHref
              className={router.pathname == "/login" ? "active" : ""}
            >
              <Nav.Link eventKey={2} href="/login">
                Sign in
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
