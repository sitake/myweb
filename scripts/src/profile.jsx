const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Table = rb.Table;
const React = require('react');
const ReactDOM = require('react-dom');

const MyProfile = React.createClass({

	render:function(){
		return(
	
		<div>
			
			<Table striped bordered hover condensed responsive>
			<thead>
			<tr>
				<th colSpan="2">自己紹介</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>氏名</td>
				<td>金子尚輝</td>
			</tr>
			<tr>
				<td>所属</td>
				<td>東京電機大学 工学部 情報通信工学科</td>
			</tr>
			<tr>
				<td>趣味</td>
				<td>TRPGとかボードゲームとか</td>
			</tr>
			<tr>
				<td>やってること</td>
				<td>Raspberry Piとかいろいろ</td>
			</tr>
			<tr>
				<td>目標</td>
				<td>モットツヨイギジュツシャニナル</td>
			</tr>
			</tbody>
			</Table>

		</div>
		);
	}

});

ReactDOM.render(<MyProfile/>,document.getElementById('app'));
module.exports = MyProfile;
