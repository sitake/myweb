const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;

const React = require('react');
const ReactDOM = require('react-dom');

const MyHobby = React.createClass({

	render:function(){
		return(
			<Jumbotron>
				<h1>準備中</h1>
			</Jumbotron>
		);
	}
});

module.exports = MyHobby;

ReactDOM.render(<MyHobby/>,document.getElementById('app'));
