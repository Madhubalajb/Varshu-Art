import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Brand href="/" className="text-info mx-5">
				<strong>Varshu's Art</strong>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/art" className="mx-1">Art Shower</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;