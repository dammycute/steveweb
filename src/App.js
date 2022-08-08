import React from "react";
import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero"
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Touch from "./component/Touch";
// import styled from 'styled-components'

function App() {
	return (
		<React.Fragment>
			
			<div className="container">
				<Hero />
				<About />
				<Service />
				<Portfolio />
				<Touch />

				{/* <Royal/> */}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
