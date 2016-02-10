const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;
const Panel = rb.Panel;

const RaspiPanel = require('./raspi.jsx');
const WebRTCPanel = require('./webrtc.jsx');
const ReactPanel = require('./react.jsx');

const ExpandedPanel = require('./expandedPanel.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const MyWorks = React.createClass({

	render:function(){
		return(
			<div>
			<Grid>
				<Row>
					<Col md={12}>
						<Jumbotron>
							<h1>Raspberry Pi</h1>
							<p>画像処理とかサーバとか</p>
							<ExpandedPanel>
								<RaspiPanel onClickHandler={this.props.onClickHandler}/>
							</ExpandedPanel>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Jumbotron>
						<h1>WebRTC</h1>
						<p>P2Pで動画配信したのをまとめたもの</p>
						<ExpandedPanel>
							<WebRTCPanel onClickHandler={this.props.onClickHandler}/>
						</ExpandedPanel>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Jumbotron>
							<h1>React</h1>
							<p>おすすめされて勉強してみたもののたぶん使わないけど使い方まとめてみる</p>
							<ExpandedPanel>
								<ReactPanel onClickHandler={this.props.onClickHandler}/>
							</ExpandedPanel>
						</Jumbotron>
					</Col>
				</Row>
			</Grid>
		</div>
		);
	}
});

module.exports = MyWorks;

ReactDOM.render(<MyWorks/>,document.getElementById('app'));
