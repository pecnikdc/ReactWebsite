'use strict';

import React from 'react';
import { Link } from 'react-router';


const Footer = (props) => {

	return (
		<footer className="main">
		<div className="container">

			<div className="logo">
				<Link to="/">Lisk Platform</Link>
			</div>
		</div>
		</footer>
	);

}

export default Footer;
