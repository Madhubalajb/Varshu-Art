import React, { useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import ImageModal from './ImageModal'
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
	const[show, setShow] = useState(false)
	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)

	return (
		<center className="Art">
			<Container>
				<Row>
					<div className="col Image-Container">
						<img src={village1} alt="Village Sketch"/>
						<h5>Village</h5>
						<ImageModal id="one" src={village1} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={flower} alt="Flower Sketch"/>
						<h5>Sembaruthi Flower</h5>
						<ImageModal id="two" src={flower} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={village2} alt="Village forest Sketch"/>
						<h5>Village Forest</h5>
						<ImageModal id="three" src={village2} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={restaurant} alt="Restaurant Sketch"/>
						<h5>Restaurant in Zootophia</h5>
						<ImageModal id="four" src={restaurant} show={show} Show={handleShow} Close={handleClose}/>
					</div>
				</Row>

				<Row>
					<div className="col Image-Container">
						<img src={girl2} alt="Girl Sketch"/>
						<ImageModal id="five" src={girl2} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={girl4} alt="Girl Sketch"/>
						<ImageModal id="six" src={girl4} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={girl1} alt="Girl Sketch"/>
						<ImageModal id="seven" src={girl1} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={girl3} alt="Girl Sketch"/>
						<ImageModal id="eight" src={girl3} show={show} Show={handleShow} Close={handleClose}/>
					</div>
				</Row>

				<Row>
					<div className="col Image-Container">
						<img src={sofia} alt="Sofia Sketch"/>
						<h5>Disney Princess Sofia</h5>
						<ImageModal id="nine" src={sofia} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={ship} alt="Ship Sketch"/>
						<h5>Ship</h5>
						<ImageModal id="ten" src={ship} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={krishna} alt="Lord krishna Sketch"/>
						<h5>Kutty krishna</h5>
						<ImageModal id="elevan" src={krishna} show={show} Show={handleShow} Close={handleClose}/>
					</div>

					<div className="col Image-Container">
						<img src={chutki} alt="Chota beam Chutki Sketch"/>
						<h5>Chota Beam Chutki</h5>
						<ImageModal id="twelve" src={chutki} show={show} Show={handleShow} Close={handleClose}/>
					</div>
				</Row>
			</Container>
		</center>
	)
}

export default Art;