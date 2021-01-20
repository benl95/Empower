import React from 'react';
import SvgLookIcon from '../icons/LookIcon3';
import SvgSpecificIcon from '../icons/SpecificIcon';
import './zerostate.css';

class ZeroState extends React.Component {
	render() {
		return (
			<div className="textContainer">
				<h1>Welcome to the page of Empower 2.0</h1>
				<p>
					To analyse the sustainable energy production of click on the
					province to display the data
				</p>
				<SvgLookIcon viewBox="0 0 200 200" height="200px" fill="#f89976" />
				<p>
					To get specified data about the municipalities click on a
					specific municipality
				</p>
				<SvgSpecificIcon
					className="specificIcon"
					width="212pt"
					height="170px"
					stroke="#f89976"
					viewBox="0 -30 120 180"
				/>
				<h2>
					Get inspired to become more <strong>green</strong>
				</h2>
			</div>
		);
	}
}

export default ZeroState;
