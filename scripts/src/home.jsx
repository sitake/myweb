const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;
const Alert = rb.Alert;
const Image = rb.Image;
const Thumbnail = rb.Thumbnail;

const React = require('react');
const ReactDOM = require('react-dom');

const MyHome = React.createClass({

	changeDisplay:function(e){
		return function(){
			this.props.onClickHandler(e);
		}
	},

	render:function(){
		
		return(
	<Grid>
		<Row>
			<Col xs={12} sm={12} md={12} lg={12}>
				<Jumbotron id="welcome">
					<p>制作物とかまとめたものを掲載しています</p>
					<Alert bsStyle="warning">工事中のためほとんど準備中です</Alert>
				</Jumbotron>
			</Col>
		</Row>
		<Row>
			<Col xs={4} md={4}>
				<Button bsStyle="link" bsSize="large" onClick={this.changeDisplay("home-profile").bind(this)}>
					<h2>プロフィール</h2>
				</Button>
			</Col>
			<Col xs={4} md={4}>
				<Button bsStyle="link" bsSize="large" onClick={this.changeDisplay("home-works").bind(this)}>
					<h2>制作物</h2>
				</Button>
			</Col>
			<Col xs={4} md={4}>
				<Button bsStyle="link" bsSize="large" onClick={this.changeDisplay("home-hobby").bind(this)}>
					<h2>趣味</h2>
				</Button>
			</Col>
		</Row>
	</Grid>
		);
	}
});

module.exports = MyHome;
ReactDOM.render(<MyHome/>,document.getElementById('app'));
