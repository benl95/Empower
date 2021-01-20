import React from 'react';
import BioGasIcon from '../icons/Biogasicon';
import WindIcon from '../icons/WindButton';
import SolarIcon from '../icons/SolarIcon';
import './filterbutton.css';

class FilterButtons extends React.Component {
	render() {
		return (
			<div className="filterContainer">
				<button className="solarButton">
					<BioGasIcon width={43} height={43} />
				</button>
				<button className="biogasButton">
					<WindIcon width={43} height={43} />
				</button>
				<button className="windButton">
					<SolarIcon width={43} height={43} />
				</button>
			</div>
		);
	}
}

export default FilterButtons;
