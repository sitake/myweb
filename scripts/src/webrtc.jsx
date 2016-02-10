const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const React = require('react');
const ReactDOM = require('react-dom');


const WebRTCPanel = React.createClass({

	clickHandler:function(e){
		return function(){
			this.props.onClickHandler(e);
		}
	},

	render:function(){
	
		return(

			<Grid>
				<Row>
					<Col md={4}>
						<Jumbotron>

							<h2>
								WebRTCでのメディア取得を試してみる
							</h2>
							<p>
								WebRTCでWebカメラやマイクにアクセスするのを試してみたのでまとめてみる。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-webrtc-media").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
					<Col md={4}>
						<Jumbotron>

							<h2>
								WebRTCでP2Pを試してみる
							</h2>
							<p>
								WebRTCでP2P通信をして、動画のストリーミング配信をやってみた。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-webrtc-p2p").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>

					<Col md={4}>
						<Jumbotron>

							<h2>
								WebRTCで動画配信
							</h2>
							<p>
								P2Pを1対多にして、動画配信者気分を味わえるようにしてみた。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-webrtc-multi").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
				</Row>
			</Grid>
		
		);
	
	}

});

module.exports = WebRTCPanel;

ReactDOM.render(<WebRTCPanel/>,document.getElementById('app'));




