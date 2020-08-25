import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="header-item">
				Cycles Archive
			</Link>
			<div className="right-header">
				<Link to="/" className="header-item">
					Current Cycle
				</Link>
				<Link to="/" className="header-item">
					All Entries
				</Link>
				<GoogleAuth />
			</div>
		</div>
	);
};

export default Header;
