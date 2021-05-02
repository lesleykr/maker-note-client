import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


interface IProps {
  fetchProjects: (fetchProjects: string) => string,
  
}

interface IState {
  projectName: string,
  medium: string, 
  totalMaterialCost: number
}

export default class Sitebar extends Component <IProps, IState>{
  constructor(props: IProps) {
      super(props)
      this.state = {
          isOpen: false
                
      };
  }


  toggle = () => this.setState({isOpen: !this.state.isOpen});

  render() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MakerNote</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={this.props.clickLogout}>Logout</Button>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
}
