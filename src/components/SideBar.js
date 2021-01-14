import React from 'react';
import ZeroState from './ZeroState';
import './sidebar.css';

class SideBar extends React.Component {
	render() {
		return (
			<div className="sidebarContainer">
				<div className="contentContainer">
					<ZeroState />
				</div>
			</div>
		);
	}
}

export default SideBar;
