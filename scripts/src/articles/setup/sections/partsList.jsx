const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Table = rb.Table;
const React = require('react');
const ReactDOM = require('react-dom');

const PartsList = React.createClass({

	render:function(){
		return(
	
		<div>
			
			<Table striped bordered hover condensed responsive>
			<thead>
			<tr>
				<th>部品番号</th>
				<th>名称</th>
				<th>備考</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>1</td>
				<td>Raspberry Pi2 Model B</td>
				<td>本体</td>
			</tr>
			<tr>
				<td>2</td>
				<td>microSD</td>
				<td>8GB程度</td>
			</tr>
			<tr>
				<td>3</td>
				<td>マイクロUSB</td>	
				<td>スマホ充電用がよい</td>
			</tr>
			<tr>
				<td>4</td>
				<td>マウス</td>
				<td>USB端子のもの</td>
			</tr>
			<tr>
				<td>5</td>
				<td>キーボード</td>
				<td>USB端子のもの</td>
			</tr>
			<tr>
				<td>6</td>
				<td>LANケーブル</td>
				<td>ネット接続用</td>
			</tr>
			<tr>
				<td>7</td>
				<td>ディスプレイ</td>
				<td>HDMI入力端子があるものならOK</td>
			</tr>
			<tr>
				<td>8</td>
				<td>HDMIケーブル</td>
				<td>ディスプレイとの接続用</td>
			</tr>
			</tbody>
			</Table>

		</div>
		);
	}

});

module.exports = PartsList;
