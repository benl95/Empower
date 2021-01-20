import React from 'react';
import './legenda.css';

class Legenda extends React.Component {
	render() {
		return (
			<div className="legendaContainer">
				<div className="legendaTitle">
					<h1>Green Energy Production</h1>
					<p className="first">0 TJ</p>
					<p className="second">&#62; 9000 TJ</p>
				</div>
				<div className="level0"></div>
				<div className="level1"></div>
				<div className="level2"></div>
				<div className="level3"></div>
				<div className="level4"></div>
				<div className="level5"></div>
			</div>
		);
	}
}

export default Legenda;
