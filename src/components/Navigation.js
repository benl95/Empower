import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
	}

	render() {
		return (
			<div className="navigationContainer">
				<ul className="menuItemsContainer">
					<li>
						<button
							className={this.state.active ? 'active' : 'off'}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
							href="#"
						>
							Home
						</button>
					</li>
					<li>
						<button
							className={this.state.active ? 'active' : 'off'}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
							href="#"
						>
							Tips
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
