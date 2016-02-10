const rb = require('react-bootstrap');
const Jumbotron = rb.Jumbotron;
const Grid = rb.Grid;
const Row = rb.Row;
const Col = rb.Col;
const Button = rb.Button;

const AutoAffix = require('react-overlays/lib/AutoAffix');

const React = require('react');
const ReactDOM = require('react-dom');

const FirstSection = require('./sections/first.jsx');
const PreparationSection = require('./sections/preparation.jsx');
const InstallationSection = require('./sections/install.jsx');

const Sidebar = require('../sidebar.jsx');
const sections = {"はじめに":["この記事の目的","Raspberry Piって何？"],
	"準備":["部品と周辺環境を揃える","部品リスト"],
	"OSをインストールする":["OSをSDカードにコピーする","Raspberry Piの準備","OSの設定をする","セットアップを終了する"]
};



const Article = React.createClass({


	render:function(){
		return(

			<Grid ref={"main"}>
				<Row>
					<Col md={9}>
						<FirstSection />
						<PreparationSection />
						<InstallationSection />
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

