import React from 'react';
import SvgSpecificData from '../icons/SpecificData';
import './specificdata.css';

class SpecificData extends React.Component {
	render() {
		return (
			<div className="dataContainer">
				<h1>Flevoland</h1>
				<SvgSpecificData width={275} height={1000} />
			</div>
		);
	}
}

export default SpecificData;
