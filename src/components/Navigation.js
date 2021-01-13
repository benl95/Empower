import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
	}

	render() {
		console.log(this.state.active);
		return (
			<div className="navigationContainer">
				<ul className="menuItemsContainer">
					<li
						className={this.state.active ? 'active' : 'off'}
						onClick={() => this.setState({ active: !this.state.active })}
					>
						<a href="#">Home</a>
					</li>
					<li
						className={this.state.active ? 'active' : 'off'}
						onClick={() => this.setState({ active: !this.state.active })}
					>
						<a href="#">Tips</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
