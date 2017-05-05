import React, { PureConponent } from 'react';
import { Link } from 'react-router';

export default class Archive extends PureConponent {
	render () {
		return (
			<div className="view">
				<nav className="navbar navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggled collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>
							<Link className="navbar-brand" to="/" >
								<img src="https://cdn.filestackcontent.com/nLnmrZQaRpeythR4ezUo" className="header-logo" />
							</Link>
						</div>
					</div>
				</nav>
				{this.props.children}
				<footer className="text-center">
					<p>© 2017 Scott Heng</p>
				</footer>
			</div>
		);
	}
}