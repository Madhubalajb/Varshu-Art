import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
	render () {
		return (
			<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
				<Navbar.Brand href="/" className="text-info mx-5">
					<strong>Varshu's Art</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/about" className="mx-1">About</Nav.Link>
						<Nav.Link href="/art" className="mx-1">Art Shower</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
};

export default Navigation;