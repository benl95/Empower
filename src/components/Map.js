import React from 'react';
import { geoMercator, geoPath, select } from 'd3';
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
			.attr('fill', (d) => {
				let id = d.properties.id;
				let productionId = productionData.Data.find(
					(production) => production.id === id
				);
				let sunProduction = productionId.zon;
				let windProduction = productionId.wind;
				let bioProduction = productionId.biogas;
				let production = sunProduction + windProduction + bioProduction;
				if (production <= 1800) {
					return '#D6F2D6';
				} else if (production <= 3600) {
					return '#A0EFA0';
				} else if (production <= 5400) {
					return '#34C13B';
				} else if (production <= 7200) {
					return '#20A52C';
				} else if (production >= 9000) {
					return '#1E5916';
				}
			})
			.append('title')
			.text((d) => d.properties.municipality);
	}

	render() {
		return (
			<div className="mapContainer">
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
