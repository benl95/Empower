import React from 'react';
import ZeroState from './ZeroState';
import SpecificData from './SpecificData';
import './sidebar.css';

class SideBar extends React.Component {
	render() {
		return (
			<div className="sidebarContainer">
				<div className="contentContainer">
					<SpecificData />
				</div>
			</div>
		);
	}
}

export default SideBar;
