import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';
import Link from 'next/link';

class Header extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="fixed-top shadow" color="white" light expand="md">
		<Link href="/">
          <a className="brand">Ravi Teja Kolla</a>
		 </Link>
          <NavbarToggler aria-label="Toggle navigation" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
				<Link href="/">
					<a className="text-lg no-underline nav-link pt-0 hover:text-blue-dark md:ml-8">Home</a>
				</Link>
              </NavItem>
              <NavItem>
				<Link href="/resume">
					<a className="text-lg no-underline nav-link pt-0 hover:text-blue-dark md:ml-8">Resume</a>
				</Link>
              </NavItem>
			  <NavItem>
				<Link href="/album">
					<a className="text-lg no-underline nav-link pt-0 hover:text-blue-dark md:ml-8">Photograpghy</a>
				</Link>
              </NavItem>
			  <NavItem>
				<Link href="/contact">
					<a className="text-lg no-underline nav-link pt-0 hover:text-blue-dark md:ml-8">Contact</a>
				</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header
