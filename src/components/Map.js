import React from 'react';
import { geoMercator, geoPath, select } from 'd3';

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

		svg.selectAll('.provinces')
			.data(data.features)
			.join('path')
			.attr('class', 'provinces')
			.attr('fill', 'black')
			.attr('d', (feature) => pathGenerator(feature));
	}

	render() {
		return <svg ref={this.myRef} style={{ overflow: 'visible' }}></svg>;
	}
}

export default Map;
