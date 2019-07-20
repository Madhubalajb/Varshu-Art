import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import village from '../img/village.webp';
import flower from '../img/flower.webp';
import krishna from '../img/krishna.webp';
import land from '../img/land.webp';
import restaurant from '../img/restaurant.webp';
import sukki from '../img/sukki.webp';
import Wanderland from '../img/Wanderland.webp';
import little_princess from '../img/little_princess.webp';
import lord_shiva from '../img/lord_shiva.webp';

const Art = () => {
	return (
		<center className="Art">
			<Container fluid={true}>
				<Row>
					<img src={village} alt="Village Sketch" />
					<img src={flower} alt="Flower Sketch" />
					<img src={krishna} alt="krishna Sketch" />
					<img src={land} alt="Land Ketch" />
				</Row>

				<Row>
					<img src={restaurant} alt="Restaurant Sketch" />
					<img src={sukki} alt="Sukki Sketch" />
					<img src={Wanderland} alt="Wanderland Sketch" />
					<img src={little_princess} alt="Little Princess Sketch" />
				</Row>

				<Row>
					<img src={lord_shiva} alt="Lord Shiva Sketch" />
				</Row>
			</Container>
		</center>
	)
}

export default Art;