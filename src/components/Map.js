import React from 'react';
import { geoMercator, geoPath, select } from 'd3';
import ScoreBoardMunicipality from './ScoreBoardMunicipality';
import ScoreBoardProvince from './ScoreBoardProvince';
import './map.css';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.renderMap = this.renderMap.bind(this);
		this.myRef = React.createRef();
		this.state = { currentData: 'main' };
	}

	componentDidMount() {
		this.renderMap();
		this.defaultView.focus();
	}

	componentDidUpdate() {
		this.renderMap();
	}

	renderMap() {
		const svg = select(this.myRef.current);
		const data =
			this.state.currentData === 'main'
				? this.props.MainData
				: this.props.MinorData;
		const productionData = this.props.ProductionData;
		const width = this.props.width;
		const height = this.props.height;

		const projection = geoMercator().fitSize([width, height], data);
		const pathGenerator = geoPath().projection(projection);

		svg.selectAll('.municipality')
			.data(data.features)
			.join('path')
			.attr('class', 'municipality')
			.attr('d', (feature) => pathGenerator(feature))
			.attr('stroke', '#ffffff')
			.attr('fill', (d) => {
				let id = d.properties.id;
				let productionId = productionData.Data.find(
					(production) => production.id === id
				);
				let sunProduction = productionId.zon;
				let windProduction = productionId.wind;
				let bioProduction = productionId.biogas;
				let totalProduction =
					sunProduction + windProduction + bioProduction;
				if (totalProduction <= 1499) {
					return '#ABEFAB';
				} else if (totalProduction <= 2999) {
					return '#88E588';
				} else if (totalProduction <= 4499) {
					return '#5BD85E';
				} else if (totalProduction <= 5999) {
					return '#34C13B';
				} else if (totalProduction >= 7499) {
					return '#20A52C';
				} else if (totalProduction >= 9000) {
					return '#1E5916';
				}
			})
			.append('title')
			.text((d) => d.properties.id);
	}

	render() {
		return (
			<div className="mapContainer">
				{this.state.currentData === 'main' ? (
					<ScoreBoardProvince />
				) : (
					<ScoreBoardMunicipality />
				)}
				<div className="buttonContainer">
					<button
						ref={(defaultFocus) => {
							this.defaultView = defaultFocus;
						}}
						id="municipalityButton"
						onClick={() =>
							this.setState({
								currentData: 'main',
							})
						}
					>
						{this.props.FirstButton}
					</button>
					<button
						onClick={() =>
							this.setState({
								currentData: 'minor',
							})
						}
					>
						{this.props.SecondButton}
					</button>
				</div>
				<svg
					ref={this.myRef}
					width={this.props.width}
					height={this.props.height}
				/>
			</div>
		);
	}
}

export default Map;
