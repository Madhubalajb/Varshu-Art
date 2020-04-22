import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About';
import Art from './components/Art';

function App() {
  return (
	  <Router>
		<div className="App">
			<Navigation />
			<Route exact path="/" component={Art} />
			<Route exact path="/about" component={About} />
		</div>
	  </Router>	
  );
}

export default App;
