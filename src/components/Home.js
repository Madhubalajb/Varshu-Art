import React from 'react';

const Home = () => {
	return (
		<div className="Home">
			<center>
				<h1>
					<b>
						<span className="white">Hi... I am </span> 
						<span className="yellow">J. Jaya Varshini,<br/></span> 
						<span className="white">welcome to my </span> 
						<span className="yellow">art world.<br/></span>
						<span className="white">And let's</span>
					</b>
				</h1>
				<button className="btn shadow-sm"><a href="/art">View them</a></button>
				<p className="fixed-bottom">designed & developed by  
					<a href="https://madhubalajb.github.io/" rel="noopener noreferrer" target="_blank"> madhubala jayakumaran</a>
				</p>
			</center>
		</div>
	)
}

export default Home;