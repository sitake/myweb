const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;
const Anchor = require('../../Anchor.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const FirstSection = React.createClass({
	
	render:function(){
		return(
			<div className={"bs-docs-section"}>
				<h1 className={"page-header"}>
					<Anchor id={"はじめに"}/>
				</h1>
				<h3>
					<Anchor id={"この記事の目的"}/>
				</h3>
				<p>
					Raspiberry PiとかLinuxとかよく知らないけど、せっかくだから他の記事(OpenCVとかのやつ)をやってみたい。という方向けにRaspberry Piの入手方法からセットアップまでをまとめてみました。
				</p>
				<p>
					ざっくりと解説するのでわかりづらいと思います。Raspberry Piのセットアップの記事は結構多いので、他のところの記事を読むのもいいと思います。
				</p>
				<h3>
					<Anchor id={"Raspberry Piって何？"}/>
				</h3>
				<p>
					Raspberry Piはざっくり言えば小型のコンピュータです。外付けの部品を付けたり、プログラムしたりすることでいろいろな機能を持たせることができます。
				</p>
				<p>
					このサイトではRaspberry Piを使って写真撮影をしたり、その機能を応用して監視カメラを作ったりしています。
				</p>
				<h3>
					<Anchor id={"どこで買えるの？"}/>
				</h3>
				<p>
					Amazonなどの通販サイトで簡単に買えます。
				</p>
			</div>
		);
	}
});

module.exports = FirstSection;
ReactDOM.render(<FirstSection />,document.getElementById('app'));
