const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const Anchor = require('../../Anchor.jsx');

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
					<Anchor id={"カメラの購入"}/>
				</h3>
				<p>
					画像処理用のWebカメラを購入しました。LogicoolのC270というカメラです。カメラのほかにモノラル入力マイクがついているので、これ一台で音声処理まで遊べます。
				</p>
				<h3>
					<Anchor id={"Open-CVのインストール"}/>
				</h3>
				<p>
					画像処理にはOpen-CVを使います。ラズパイでやるといことで、今回はPython版のOpen-CVを利用することにします。インタプリタも使えるのでデバッグするのが簡単ですね。
				</p>
				<p>
					どちらもapt-get installコマンドで取得できるので簡単にインストールしていきます。
				</p>
				<p>
					pythonコマンドでインタプリタを起動してopencvがimportできるか確認。これで準備が整いました。
				</p>
			</div>
		);
	}
});

module.exports = PreparationSection;
