import React from 'react';
import './app.css';
import municipalityData from '../data/municipalities.geo.json';
import provinceData from '../data/provinces.geo.json';
import Map from './Map';
import Navigation from './Navigation';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Map
					width={900}
					height={600}
					FirstButton="Municipalities"
					SecondButton="Provinces"
					MainData={municipalityData}
					MinorData={provinceData}
				/>
			</div>
		);
	}
}

export default App;
