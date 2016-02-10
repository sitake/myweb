const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;
const Anchor = require('../../Anchor.jsx');

const React = require('react');
const ReactDOM = require('react-dom');

const InstallationSection = React.createClass({
	
	render:function(){
		return(
			<div className={"bs-docs-section"}>
				<h1 className={"page-header"}>
					<Anchor id={"OSをインストールする"}/>
				</h1>
				<h3>
					<Anchor id={"OSをSDカードにコピーする"}/>
				</h3>
				<p>
					部品の準備ができたらさっそくRaspberry Piのセットアップを行いましょう。Raspberry Piを動かすためにはOSをインストールする必要があるので、公式サイトからOSをダウンロードしましょう。下のURLからダウンロードページに飛べます。
				</p>
				<a href="https://www.raspberrypi.org/downloads/">
					https://www.raspberrypi.org/downloads/
				</a>
				<p>
					ページ左側のNOOBSを選んでZipをダウンロードし、展開したファイルをSDカードにコピーします。
				</p>
				<p>
					事前にSDカードをフォーマットしておくのも忘れずに。
				</p>
				<h3>
					<Anchor id={"Raspberry Piの準備"}/>
				</h3>
				<p>
					SDカード、マウス、キーボード、LANケーブル、HDMIケーブルをすべてRaspberry Piに接続してください。最後に電源として、マイクロUSBを接続すれば自動でRaspberry Piが起動します。
				</p>
				<h3>
					<Anchor id={"OSの設定をする"}/>
				</h3>
				<p>
					Raspberry Piが起動するとNOOBSが立ち上がります。マウスで操作ができるので、真ん中のウィンドウから<strong>Raspbian</strong>のチェックボックスにチェックを入れます。
				</p>
				<p>
					次に画面下部のLanguageタブをクリックして、日本語を選択します。
				</p>
				<p>
					最後に画面左上のInstallボタンをクリックして、確認ウィンドウで「はい」を選べばインストールが開始します。
				</p>
				<h3>
					<Anchor id={"セットアップを終了する"}/>
				</h3>
				<p>
					インストールが完了するとOSが立ち上がり、セットアップメニューが表示されます。ここでは特に設定を行わないので、TABキーを押してFinishを選択し、Enterキーでセットアップを終了します。i
				</p>
				<p>
					以上の作業でRaspberry Piのセットアップは終了です。
				</p>
			</div>
		);
	}
});

module.exports = InstallationSection;
ReactDOM.render(<InstallationSection />,document.getElementById('app'));
