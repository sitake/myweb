const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const Anchor = require('../../Anchor.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const PurposeSection = React.createClass({
	
	render:function(){
		return(
			<div className={"bs-docs-section"}>
				<h1 className={"page-header"}>
					<Anchor id={"目的"}/>
				</h1>
				<h3>
					<Anchor id={"Raspberry Pi使うなら設置して使うものを作りたい！"}/>
				</h3>
				<p>
					ということで、最終的には監視カメラのようなものを作りたいと思い、Open－CVに手を出してみました。
				</p>
			</div>
		);
	}
});

module.exports = PurposeSection;
