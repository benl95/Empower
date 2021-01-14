import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigationContainer">
				<ul className="menuItemsContainer">
					<li>
						<button>Home</button>
					</li>
					<li>
						<button>Tips</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
