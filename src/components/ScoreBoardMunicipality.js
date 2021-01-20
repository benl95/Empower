import React from 'react';
import './scoreboard.css';

class ScoreBoardMunicipality extends React.Component {
	render() {
		return (
			<div className="scoreboardContainer">
				<div className="row">
					<div className="columnRanking">
						<div className="ranking">1</div>
						<div className="ranking">2</div>
						<div className="ranking">3</div>
					</div>
					<div className="columnMunicipality">
						<div className="municipality">Noordoostpolder</div>
						<div className="municipality">Zeewolde</div>
						<div className="municipality">Lelystad</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ScoreBoardMunicipality;
