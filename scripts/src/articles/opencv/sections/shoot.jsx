const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const Anchor = require('../../Anchor.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const ShootSection = React.createClass({
	
	render:function(){
		return(
			<div className={"bs-docs-section"}>
				<h1 className={"page-header"}>
					<Anchor id={"写真撮影をする"}/>
				</h1>
				<h3>
					<Anchor id={"カメラ接続の確認"}/>
				</h3>
				<p>
					まずはラズパイにカメラが認識されているかを確認。lsusbコマンドで調べてみました。
				</p>
				<p>
					ちゃんと認識されてますね。
				</p>
				<h3>
					<Anchor id={"カメラのインスタンスを取得"}/>
				</h3>
				<p>
					pythonからOpen-CVのカメラのインスタンスを取得します。まずはインタプリタモードで試してみます。
				</p>
				<p>
					無事取得できました。これでOpen-CVを通してWebカメラを操作できます。
				</p>
				<h3>
					<Anchor id={"写真の撮影"}/>
				</h3>
				<p>
					readメソッドを呼び出して写真を撮影します。戻り値は撮影できたかどうかのBooleanと画像データを格納した行列データがタプルで返ってきます。
					今回はこの画像を保存したいので、Open-CVのwriteImageメソッドを使ってファイルに書き込みました。
				</p>
				<h3>
					<Anchor id={"スクリプト"}/>
				</h3>
				<p>
					スクリプトとしてまとめるとこんな感じです。	
				</p>
				<p>
					このように、Open-CVでWebカメラを使った撮影をする際はVideoCaptureコンストラクタでカメラのインスタンスを取得してreadメソッドで画像データを取得できます。
				</p>
				<p>ここまでやれば、あとはOpen-CVのメソッドを使って画像を保存したり加工したりできます。
				</p>

			</div>
		);
	}
});

module.exports = ShootSection;
