import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ImageModal from './ImageModal'
import chutki from '../img/chutki.webp'
import flower from '../img/flower.webp'
import girl1 from '../img/girl1.webp'
import girl2 from '../img/girl2.webp'
import girl3 from '../img/girl3.webp'
import girl4 from '../img/girl4.webp'
import greenery from '../img/greenery.webp'
import krishna from '../img/krishna.webp'
import moon_girl from '../img/moon_girl.webp'
import night_bird from '../img/night_bird.webp'
import pink_tree from '../img/pink_tree.webp'
import rainbow_tree from '../img/rainbow_tree.webp'
import red_bubbles from '../img/red_bubbles.webp'
import restaurant from '../img/restaurant.webp'
import ship from '../img/ship.webp'
import sofia from '../img/sofia.webp'
import valley from '../img/valley.webp'
import village from '../img/village.webp'

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

	const[thirteen, setThirteen] = useState(false)
	const handleThirteen = () => setThirteen(true)
	const handleNoThirten = () => setThirteen(false)

	const[fourteen, setFourteen] = useState(false)
	const handleFourteen = () => setFourteen(true)
	const handleNoFourteen = () => setFourteen(false)

	const[fifteen, setFifteen] = useState(false)
	const handleFifteen = () => setFifteen(true)
	const handleNoFifteen = () => setFifteen(false)

	const[sixteen, setSixteen] = useState(false)
	const handleSixteen = () => setSixteen(true)
	const handleNoSixteen = () => setSixteen(false)

	const[seventeen, setSeventeen] = useState(false)
	const handleSeventeen = () => setSeventeen(true)
	const handleNoSeventeen = () => setSeventeen(false)

	const[eighteen, setEighteen] = useState(false)
	const handleEighteen = () => setEighteen(true)
	const handleNoEighteen = () => setEighteen(false)

	return (
		<center className="Art">
			<Container fluid>
				<article className="Image-Container">
					<img src={village} alt="Village Sketch" onClick={handleOne}/>
					<ImageModal id="one" src={village} show={one} Close={handleNoOne}/>
				</article>

				<article className="Image-Container">
					<img src={flower} alt="Flower Sketch" onClick={handleTwo}/>
					<ImageModal id="two" src={flower} show={two} Close={handleNoTwo}/>
				</article>

				<article className="Image-Container">
					<img src={valley} alt="Village forest Sketch" onClick={handleThree}/>
					<ImageModal id="three" src={valley} show={three} Close={handleNoThree}/>
				</article>

				<article className="Image-Container">
					<img src={rainbow_tree} alt="Restaurant Sketch" onClick={handleFour}/>
					<ImageModal id="four" src={rainbow_tree} show={four} Close={handleNoFour}/>
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
					<img src={pink_tree} alt="Girl Sketch" onClick={handleSeven}/>
					<ImageModal id="seven" src={pink_tree} show={seven} Close={handleNoSeven}/>
				</article>

				<article className="Image-Container">
					<img src={girl3} alt="Girl Sketch" onClick={handleEight}/>
					<ImageModal id="eight" src={girl3} show={eight} Close={handleNoEight}/>
				</article>

				<article className="Image-Container">
					<img src={sofia} alt="Sofia Sketch" onClick={handleNine}/>
					<ImageModal id="nine" src={sofia} show={nine} Close={handleNoNine}/>
				</article>

				<article className="Image-Container">
					<img src={greenery} alt="Ship Sketch" onClick={handleTen}/>
					<ImageModal id="ten" src={greenery} show={ten} Close={handleNoTen}/>
				</article>

				<article className="Image-Container">
					<img src={krishna} alt="Lord krishna Sketch" onClick={handleEleven}/>
					<ImageModal id="eleven" src={krishna} show={eleven} Close={handleNoEleven}/>
				</article>

				<article className="Image-Container">
					<img src={night_bird} alt="Chota beam Chutki Sketch" onClick={handleTwelve}/>
					<ImageModal id="twelve" src={night_bird} show={twelve} Close={handleNoTwelve}/>
				</article>

				<article className="Image-Container">
					<img src={chutki} alt="" onClick={handleThirteen}/>
					<ImageModal id="thirteen" src={chutki} show={thirteen} Close={handleNoThirten}/>
				</article>

				<article className="Image-Container">
					<img src={red_bubbles} alt="" onClick={handleFourteen}/>
					<ImageModal id="fourteen" src={red_bubbles} show={fourteen} Close={handleNoFourteen}/>
				</article>

				<article className="Image-Container">
					<img src={moon_girl} alt="" onClick={handleFifteen}/>
					<ImageModal id="fifteen" src={moon_girl} show={fifteen} Close={handleNoFifteen}/>
				</article>

				<article className="Image-Container">
					<img src={restaurant} alt="" onClick={handleSixteen}/>
					<ImageModal id="sixteen" src={restaurant} show={sixteen} Close={handleNoSixteen}/>
				</article>

				<article className="Image-Container">
					<img src={girl1} alt="" onClick={handleSeventeen}/>
					<ImageModal id="seventeen" src={girl1} show={seventeen} Close={handleNoSeventeen}/>
				</article>

				<article className="Image-Container">
					<img src={ship} alt="" onClick={handleEighteen}/>
					<ImageModal id="eighteen" src={ship} show={eighteen} Close={handleNoEighteen}/>
				</article>
			</Container>
		</center>
	)
}

export default Art;