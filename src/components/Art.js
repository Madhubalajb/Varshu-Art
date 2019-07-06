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
			<Container>
				<Row>
					<Col className="card white">
						<img src={village} alt="Village Sketch" />
					</Col>
					<Col className="card yellow">
						<img src={flower} alt="Flower Sketch" />
					</Col>
				</Row>
				<Row>
					<Col className="card yellow">
						<img src={krishna} alt="krishna Sketch" />
					</Col>
					<Col className="card white">
						<img src={land} alt="Land Ketch" />
					</Col>
				</Row>
				<Row>
					<Col className="card white">
						<img src={restaurant} alt="Restaurant Sketch" />
					</Col>
					<Col className="card yellow">
						<img src={sukki} alt="Sukki Sketch" />
					</Col>
				</Row>
				<Row>
					<Col className="card yellow">
						<img src={sukki} alt="Sukki Sketch" />
					</Col>
					<Col className="card white">
						<img src={Wanderland} alt="Wanderland Sketch" />
					</Col>
				</Row>
				<Row>
					<Col className="card white">
						<img src={little_princess} alt="Little Princess Sketch" />
					</Col>
					<Col className="card yellow">
						<img src={lord_shiva} alt="Lord Shiva Sketch" />
					</Col>
				</Row>
			</Container>
		</center>
	)
}

export default Art;