const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const Anchor = require('../../Anchor.jsx');
const PartsList = require('./partsList.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const PreparationSection = React.createClass({
	
	render:function(){
		return(
			<div className={"bs-docs-section"}>
				<h1 className={"page-header"}>
					<Anchor id={"準備"}/>
				</h1>
				<h3>
					<Anchor id={"部品と周辺機器を揃える"}/>
				</h3>
				<p>
					Raspberry Piを動かすための部品と周辺機器を揃えましょう。最低限ネットワーク環境は必要です。
				</p>
				<p>
					その他に必要な部品は以下の通りです。Amazonで揃います。
				</p>	
				<h3>
					<Anchor id={"部品リスト"}/>
				</h3>
					<PartsList />
			</div>
		);
	}
});

module.exports = PreparationSection;
ReactDOM.render(<PreparationSection />,document.getElementById('app'));
