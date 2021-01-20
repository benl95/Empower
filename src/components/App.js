import React from 'react';
import Flevoland from '../data/flevoland.geo.json';
import FlevolandGemeentes from '../data/flevolandGemeentes.geo.json';
import ProductionData from '../data/productionFlevoland.json';
import Map from './Map';
import Navigation from './Navigation';
import SideBar from './SideBar';
import FilterButtons from './FilterButtons';
import Legenda from './Legenda';
import './app.css';

class App extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<Navigation />
				<FilterButtons />
				<Legenda />
				<Map
					width={600}
					height={500}
					FirstButton="Provinces"
					SecondButton="Municipalities"
					MainData={Flevoland}
					MinorData={FlevolandGemeentes}
					ProductionData={ProductionData}
				/>
				<SideBar />
			</div>
		);
	}
}

export default App;
