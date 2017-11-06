import React from 'react';

export default () => (
	<nav className="nav">
		<img src="/scti-uenf-app/images/logo.png" alt="SCTI UENF" className="nav-logo"/>
		<input type="checkbox" id="nav-menu_toggle" />
		<label htmlFor="nav-menu_toggle" className="nav-menuButton">
		</label>
		<div className="nav-menu">
			<a href="/html/" className="nav-link">HTML</a>
			<a href="/css/" className="nav-link">CSS</a>
		</div>
	</nav>
)