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
	const[one, setOne] = useState(false)
	const handleOne = () => setOne(true)
	const handleNoOne = () => setOne(false)

	const[two, setTwo] = useState(false)
	const handleTwo = () => setTwo(true)
	const handleNoTwo = () => setTwo(false)

	const[three, setThree] = useState(false)
	const handleThree = () => setThree(true)
	const handleNoThree = () => setThree(false)

	const[four, setFour] = useState(false)
	const handleFour = () => setFour(true)
	const handleNoFour = () => setFour(false)

	const[five, setFive] = useState(false)
	const handleFive = () => setFive(true)
	const handleNoFive = () => setFive(false)

	const[six, setSix] = useState(false)
	const handleSix = () => setSix(true)
	const handleNoSix = () => setSix(false)

	const[seven, setSeven] = useState(false)
	const handleSeven = () => setSeven(true)
	const handleNoSeven = () => setSeven(false)

	const[eight, setEight] = useState(false)
	const handleEight = () => setEight(true)
	const handleNoEight = () => setEight(false)

	const[nine, setNine] = useState(false)
	const handleNine = () => setNine(true)
	const handleNoNine = () => setNine(false)

	const[ten, setTen] = useState(false)
	const handleTen = () => setTen(true)
	const handleNoTen = () => setTen(false)

	const[eleven, setEleven] = useState(false)
	const handleEleven = () => setEleven(true)
	const handleNoEleven = () => setEleven(false)

	const[twelve, setTwelve] = useState(false)
	const handleTwelve = () => setTwelve(true)
	const handleNoTwelve = () => setTwelve(false)

	return (
		<center className="Art">
			<Container fluid>
				<article className="Image-Container">
					<img src={village1} alt="Village Sketch" onClick={handleOne}/>
					<h5>Village</h5>
					<ImageModal id="one" src={village1} show={one} Close={handleNoOne}/>
				</article>

				<article className="Image-Container">
					<img src={flower} alt="Flower Sketch" onClick={handleTwo}/>
					<h5>Sembaruthi</h5>
					<ImageModal id="two" src={flower} show={two} Close={handleNoTwo}/>
				</article>

				<article className="Image-Container">
					<img src={village2} alt="Village forest Sketch" onClick={handleThree}/>
					<h5>Village Forest</h5>
					<ImageModal id="three" src={village2} show={three} Close={handleNoThree}/>
				</article>

				<article className="Image-Container">
					<img src={restaurant} alt="Restaurant Sketch" onClick={handleFour}/>
					<h5>Restaurant in Zootopia</h5>
					<ImageModal id="four" src={restaurant} show={four} Close={handleNoFour}/>
				</article>
			
				<article className="Image-Container">
					<img src={girl2} alt="Girl Sketch" onClick={handleFive}/>
					<ImageModal id="five" src={girl2} show={five} Close={handleNoFive}/>
				</article>

				<article className="Image-Container">
					<img src={girl4} alt="Girl Sketch" onClick={handleSix}/>
					<ImageModal id="six" src={girl4} show={six} Close={handleNoSix}/>
				</article>

				<article className="Image-Container">
					<img src={girl1} alt="Girl Sketch" onClick={handleSeven}/>
					<ImageModal id="seven" src={girl1} show={seven} Close={handleNoSeven}/>
				</article>

				<article className="Image-Container">
					<img src={girl3} alt="Girl Sketch" onClick={handleEight}/>
					<ImageModal id="eight" src={girl3} show={eight} Close={handleNoEight}/>
				</article>

				<article className="Image-Container">
					<img src={sofia} alt="Sofia Sketch" onClick={handleNine}/>
					<h5>Disney Princess Sofia</h5>
					<ImageModal id="nine" src={sofia} show={nine} Close={handleNoNine}/>
				</article>

				<article className="Image-Container">
					<img src={ship} alt="Ship Sketch" onClick={handleTen}/>
					<h5>Ship</h5>
					<ImageModal id="ten" src={ship} show={ten} Close={handleNoTen}/>
				</article>

				<article className="Image-Container">
					<img src={krishna} alt="Lord krishna Sketch" onClick={handleEleven}/>
					<h5>Kutty krishna</h5>
					<ImageModal id="eleven" src={krishna} show={eleven} Close={handleNoEleven}/>
				</article>

				<article className="Image-Container">
					<img src={chutki} alt="Chota beam Chutki Sketch" onClick={handleTwelve}/>
					<h5>Chota Beam Chutki</h5>
					<ImageModal id="twelve" src={chutki} show={twelve} Close={handleNoTwelve}/>
				</article>
			</Container>
		</center>
	)
}

export default Art;