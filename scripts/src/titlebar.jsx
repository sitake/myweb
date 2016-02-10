const rb = require('react-bootstrap');
const Navbar = rb.Navbar;
const NavItem = rb.NavItem;
const Nav = rb.Nav;
const NavDropdown = rb.NavDropdown;
const MenuItem = rb.MenuItem;
const React = require('react');
const ReactDOM = require('react-dom');


const MyNavbar = React.createClass({

	changeDisplay:function(e){
		return function(){
			this.props.onClickHandler(e);
		};
	},
	
	render:function(){
		return(
			<Navbar inverse staticTop >
				<Navbar.Header>
					<Navbar.Brand>
						<a href = "index.html">金子の工房 ～三谷研の研究生～</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} onClick={this.changeDisplay("home").bind(this)}>トップ</NavItem>
						<NavItem eventKey={2} onClick={this.changeDisplay("home-profile").bind(this)}>プロフィール</NavItem>
						<NavDropdown eventKey={3} title="制作物" id="myWorks">
							<MenuItem eventKey={3.1} onClick={this.changeDisplay("home-works-raspi").bind(this)}>Raspberry Pi</MenuItem>
							<MenuItem eventKey={3.2} onClick={this.changeDisplay("home-works-webrtc").bind(this)}>WebRTC</MenuItem>
							<MenuItem eventKey={3.3} onClick={this.changeDisplay("home-works-react").bind(this)}>React</MenuItem>
						</NavDropdown>
						<NavItem eventKey={4} href="http://www.icrus.org/">研究室のホームページ</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});

module.exports = MyNavbar;

ReactDOM.render(
	<MyNavbar/>,
	document.getElementById('app')
);
