const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const React = require('react');
const ReactDOM = require('react-dom');


const RaspiPanel = React.createClass({

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
								Raspberry Piの初期設定
							</h2>
							<p>
								Raspberry Piの初期設定をまとめてみた。OpenCVとか入れます。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-raspi-setup").bind(this)}>この記事を読む
							</Button>
						</Jumbotron>
					</Col>
					<Col md={4}>
						<Jumbotron>

							<h2>
								Raspberry Pi + OpenCVで画像処理
							</h2>
							<p>
								Python-OpenCVを使ってRaspberry PiにWebカメラを繋げて遊んだので、その方法とかをまとめてみる。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-raspi-opencv").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
					<Col md={4}>
						<Jumbotron>

							<h2>
								Raspberry Pi + PyAudioで録音
							</h2>
							<p>
								PyAudioを使ってWebカメラの録音機能を利用してみたので、それをまとめてみる。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-raspi-pyaudio").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Jumbotron>

							<h2>
								Pythonで簡単Webサーバ
							</h2>
							<p>
								Web系の知識をつけようとやってみたやつ。Pythonのtornadoというライブラリを使って構築してみた。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-raspi-tornado").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
					<Col md={4}>
						<Jumbotron>

							<h2>
								Raspberry Piで監視カメラ
							</h2>
							<p>
								Webサーバや画像処理の勉強をしたので、まとめとして監視カメラを作ってみた。
							</p>
							<Button bsStyle="primary" onClick={this.clickHandler("home-works-raspi-camera").bind(this)}>
								この記事を読む
							</Button>
						</Jumbotron>
					</Col>
					<Col md={4}>
						<Jumbotron>

							<h2>
								準備中
							</h2>
							<p>
								準備中
							</p>
						</Jumbotron>
					</Col>

				</Row>
			</Grid>
		
		);
	
	}

});

module.exports = RaspiPanel;

ReactDOM.render(<RaspiPanel/>,document.getElementById('app'));




