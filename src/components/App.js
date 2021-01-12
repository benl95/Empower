import React from 'react';
import data from '../data/provinces.geo.json';
import Map from './Map';

class App extends React.Component {
	render() {
		return (
			<div>
				<Map data={data} width={900} height={600} />
			</div>
		);
	}
}

export default App;
