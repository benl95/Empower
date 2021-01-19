import React from 'react';
import * as d3 from 'd3';
import { select } from 'd3';

class DonutChart extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.drawDonutChart = this.drawDonutChart.bind(this);
	}

	componentDidMount() {
		this.drawDonutChart();
	}

	drawDonutChart() {
		const svg = select(this.myRef.current);
		const data = [10, 30, 60];
		const width = this.props.width;
		const height = this.props.height;
		const radius = Math.min(width, height) / 4;
		const g = svg
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		const color = d3.scaleOrdinal(['#FFD400', '#F79F39', '#129BDB']);

		const pie = d3.pie();

		const arc = d3.arc().innerRadius(70).outerRadius(radius);

		const arcs = g
			.selectAll('arc')
			.data(pie(data))
			.enter()
			.append('g')
			.attr('class', 'arc');

		arcs
			.append('path')
			.attr('fill', function (d, i) {
				return color(i);
			})
			.attr('d', arc);
	}

	render() {
		return (
			<div className="chartContainer">
				<svg
					ref={this.myRef}
					width={this.props.width}
					height={this.props.height}
				/>
			</div>
		);
	}
}

export default DonutChart;
