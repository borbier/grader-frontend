import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
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

  logout(){
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand className="text-light">JustCodeIt!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-light" href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="/problems">Problems</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="/" onClick={this.logout}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
