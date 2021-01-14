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
		const width = this.props.width;
		const height = this.props.height;

		const projection = geoMercator().fitSize([width, height], data);
		const pathGenerator = geoPath().projection(projection);

		svg.selectAll('.municipality')
			.data(data.features)
			.join('path')
			.attr('class', 'municipality')
			.attr('fill', '#C6F4C6')
			.attr('d', (feature) => pathGenerator(feature))
			.append('title')
			.text((d) => d.properties.municipality);
	}

	render() {
		return (
			<div className="mapContainer">
				<div className="buttonContainer">
					<button onClick={() => this.setState({ currentData: 'main' })}>
						{this.props.FirstButton}
					</button>
					<button onClick={() => this.setState({ currentData: 'minor' })}>
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
