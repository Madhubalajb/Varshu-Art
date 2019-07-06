import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Brand href="/" className="text-info mx-5">
				<strong>Varshu's Art</strong>
			</Navbar.Brand>
		</Navbar>
	)
}

export default Navigation;