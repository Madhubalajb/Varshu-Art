import React from 'react'
import { Row, Container } from 'react-bootstrap'
import chutki from '../img/chutki.webp'
import flower from '../img/flower.webp'
import girl1 from '../img/girl1.webp'
import girl2 from '../img/girl2.webp'
import girl3 from '../img/girl3.webp'
import girl4 from '../img/girl4.webp'
import krishna from '../img/krishna.webp'
import restaurant from '../img/restaurant.webp'
import ship from '../img/ship.webp'
import sofia from '../img/sofia.webp'
import village1 from '../img/village1.webp'
import village2 from '../img/village2.webp'

const Art = () => {
	return (
		<center className="Art">
			<Container fluid={true}>
				<Row>
					<img src={village1} alt="Village Sketch"/>
					<img src={flower} alt="Flower Sketch"/>
					<img src={krishna} alt="Lord krishna Sketch"/>
					<img src={village2} alt="Village forest Sketch"/>
				</Row>

				<Row>
					<img src={restaurant} alt="Restaurant Sketch"/>
					<img src={chutki} alt="Chota beam Chutki Sketch"/>
					<img src={girl1} alt="Girl Sketch"/>
					<img src={sofia} alt="Sofia Sketch"/>
				</Row>

				<Row>
					<img src={girl2} alt="Girl Sketch"/>
					<img src={girl3} alt="Girl Sketch"/>
					<img src={girl4} alt="Girl Sketch"/>
					<img src={ship} alt="Ship Sketch"/>
				</Row>
			</Container>
		</center>
	)
}

export default Art;