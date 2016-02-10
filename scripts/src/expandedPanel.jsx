const rb = require('react-bootstrap');
const Button = rb.Button;
const Panel = rb.Panel;

const React = require('react');
const ReactDOM = require('react-dom');

const ExpandedPanel = React.createClass({

	getInitialState:function(){
		return {open:false}
	},

	clickHandler:function(){
		this.setState({open:!this.state.open});
	},

	render:function(){
		return(
			<div>
				<Button bsStyle={"primary"} center onClick={this.clickHandler}>
					記事一覧
				</Button>
				<Panel collapsible expanded={this.state.open}>
					{this.props.children}
				</Panel>
			</div>
		);
	}
});

module.exports = ExpandedPanel;

ReactDOM.render(<ExpandedPanel>test</ExpandedPanel>,document.getElementById('app'))

