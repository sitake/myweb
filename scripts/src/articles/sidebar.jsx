const rb = require('react-bootstrap');

const SafeAnchor = rb.SafeAnchor;
const Nav = rb.Nav;
const NavItem = rb.NavItem;

const React = require('react');
const ReactDOM = require('react-dom');

const test = {"home":["home-work","home-profile","home-hobby"],
						"raspi":["raspi-setup","raspi-camera"]};

const Sidebar = React.createClass({

	getInitialState:function(){
		return {actKey:"home"}
	},

	handleClick:function(e){
		return(
			function(){
				this.setState({actKey:e});
			}
		);	
	},

	render:function(){

		var secs = this.props.sections; 
		var sectionList = Object.keys(secs).map(

			function(title,index){
				var isActive = this.state.actKey==title?"active":"";
				return(
					
					<li className={isActive} key={index}>
						<SafeAnchor href={"#"+title} onClick={this.handleClick(title).bind(this)}>
							{title}
						</SafeAnchor>
						<ul className={"nav"} key={title} >
							{secs[title].map(
								function(sub){
									return(
										<NavItem href={"#"+sub} key={sub}>
											{sub}
										</NavItem>
									);
								}
								,this)}
						</ul>
					</li>
				);
			}
		
		,this);

		return(
			<div className={"bs-docs-sidebar hidden-print"}>
				<Nav className={"bs-docs-sidenav"}>
					{sectionList}
				</Nav>
			</div>

		);
	}


});

module.exports = Sidebar;
ReactDOM.render(<Sidebar sections={test}/>,document.getElementById('app'));


