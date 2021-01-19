import React from 'react';
import SvgLookIcon from '../icons/LookIcon3';
import SvgSpecificIcon from '../icons/SpecificIcon';
import './zerostate.css';

class ZeroState extends React.Component {
	render() {
		return (
			<div className="textContainer">
				<h1>Welcome to the page of Empower 2.0</h1>
				<p margin-bottom="0">
					To analyse the sustainable energy production of click on the
					province to display the data
				</p>
				<SvgLookIcon viewBox="0 0 200 200" height="200px" fill="#f89976" />
				<p margin="0" padding="0">
					To get specified data about the municipalities click on a
					specific municipality
				</p>
				<SvgSpecificIcon
					width="212pt"
					height="200px"
					stroke="#f89976"
					viewBox="0 -10 120 170"
					margin-top="1em"
					margin-bottom="1em"
				/>
				<h2>
					Get inspired to become more <strong>green</strong>
				</h2>
			</div>
		);
	}
}

export default ZeroState;
