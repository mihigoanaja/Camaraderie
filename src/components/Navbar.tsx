function Navbar () {
	return (
		<div>
			<meta name="viewport" content="initial-scale=1,width=device-width"/>
			<div className="navbar-frame">
				<div className="navbar">
					<input type="checkbox" id="mobile-menu-toggle" hidden />
					<label htmlFor="mobile-menu-toggle" className="mobile-menu-toggle"></label>
					<a className="navtab" href="https://camaraderie.pages.dev">Home</a>
					<a className="navtab" href="https://news.alreflections.net/2025/04/camaraderie.html">About</a>
					<a className="navtab" href="https://prodcase.alreflections.net/@Camaraderie_Marketplace">Marketplace</a>
					<a className="navtab" href="https://searchwave.alreflections.net/@Camaraderie_Search">Search</a>
					<a className="navtab" href="https://nas.io/camaraderie">Community Center</a>
				</div>
			</div>
		</div>
	);
}
export default Navbar;