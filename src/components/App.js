import React from 'react';
import './app.css';
import municipalityData from '../data/municipalities.geo.json';
import provinceData from '../data/provinces.geo.json';
import Map from './Map';
import Navigation from './Navigation';
import SideBar from './SideBar';

class App extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<Navigation />
				<Map
					width={870}
					height={630}
					FirstButton="Municipalities"
					SecondButton="Provinces"
					MainData={municipalityData}
					MinorData={provinceData}
				/>
				<SideBar />
			</div>
		);
	}
}

export default App;
