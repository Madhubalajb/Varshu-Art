import React, { Component } from 'react';

class Home extends Component {
	render () {
		return (
			<div className="Home">
				<center>
					<h1><b>Hi... I am J. Jaya Varshini, studying in nineth standard. I love drawing and painting. Here is some of my paintings and drawings :)</b></h1>
					<button className="btn shadow-sm"><a href="/art">View them</a></button>
					<p className="fixed-bottom">designed & developed by 
						<a href="https://madhubalajb.github.io/" target="_blank"> madhubala jayakumaran</a>
					</p>
				</center>
			</div>
		);
	}
};

export default Home;