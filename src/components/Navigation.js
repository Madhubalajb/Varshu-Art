import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm">
			<Navbar.Brand href="/">
				<strong>Varshu's Art</strong>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;