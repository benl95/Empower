import React from 'react';
import './scoreboard.css';

class ScoreBoardProvince extends React.Component {
	render() {
		return (
			<div className="scoreboardContainer">
				<div className="row">
					<div className="columnRanking">
						<div className="ranking">1</div>
					</div>
					<div className="columnMunicipality">
						<div className="municipality">Flevoland</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ScoreBoardProvince;
