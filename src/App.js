import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Art from './components/Art';

function App() {
  return (
	  <Router>
		<div className="App">
			<Navigation />
			<Route exact path="/" component={Home} />
			<Route exact path="/art" component={Art} />
		</div>
	  </Router>	
  );
}

export default App;
