import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
	render() {
		return (
			<div className="inner cover">
				<h1 className="cover-header">JavaScript Everywhere</h1>
				<p className="lead">This archive is made with Node.js and ReactJS</p>
			</div>
		);
	}
}