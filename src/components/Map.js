import React from 'react';
import { geoMercator, geoPath, select } from 'd3';
import './map.css';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.renderMap = this.renderMap.bind(this);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.renderMap();
	}

	renderMap() {
		const svg = select(this.myRef.current);
		const data = this.props.data;
		const width = this.props.width;
		const height = this.props.height;

		const projection = geoMercator().fitSize([width, height], data);
		const pathGenerator = geoPath().projection(projection);

		svg.selectAll('.province')
			.data(data.features)
			.join('path')
			.attr('class', 'province')
			.attr('fill', '#C6F4C6')
			.attr('d', (feature) => pathGenerator(feature))
			.append('title')
			.text((d) => d.properties.statnaam);
	}

	render() {
		return (
			<svg
				ref={this.myRef}
				width={this.props.width}
				height={this.props.height}
			></svg>
		);
	}
}

export default Map;
