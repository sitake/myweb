const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const AutoAffix = require('react-overlays/lib/AutoAffix');

const React = require('react');
const ReactDOM = require('react-dom');

const PurposeSection = require('./sections/purpose.jsx');
const PreparationSection = require('./sections/preparation.jsx');
const ShootSection = require('./sections/shoot.jsx');

const Sidebar = require('../sidebar.jsx');
const sections = {
	"目的":["Raspberry Pi使うなら設置して使うものを作りたい！"],
	"準備":["カメラの購入","Open-CVのインストール"],
	"写真撮影をする":["カメラ接続の確認","カメラのインスタンスを取得",
						"写真の撮影","スクリプト"]
};



const Article = React.createClass({


	render:function(){
		return(

			<Grid ref={"main"}>
				<Row>
					<Col md={9}>
						<PurposeSection />
						<PreparationSection />
						<ShootSection />
					</Col>
					<Col md={3} className={"bs-docs-sidebar-holder"}>
						<div className='affix-example'>
        					<AutoAffix viewportOffsetTop={15} container={this}>
								<div><Sidebar sections={sections} /></div>
        					</AutoAffix>
      					</div>		
					</Col>
				</Row>
			</Grid>


		);
	},

});

module.exports = Article;

ReactDOM.render(<Article />,document.getElementById('app'));

