const React = require('react');
const ReactDOM = require('react-dom');

const MyTitlebar = require('./titlebar.jsx');
const MyPageHeader = require('./pageHeader.jsx');

const MyHome = require('./home.jsx');
const MyProfile = require('./profile.jsx');
const MyHobby = require('./hobby.jsx');
const MyWorks = require('./work.jsx');

const RaspiPanel = require('./raspi.jsx');
const ArticleOpencv = require('./articles/opencv/opencv.jsx');
const ArticlePyAudio = require('./raspi-pyaudio.jsx');
const ArticleTornado = require('./raspi-tornado.jsx');
const ArticleCamera = require('./raspi-camera.jsx');
const ArticleSetup = require('./articles/setup/setup.jsx');

const WebRTCPanel = require('./webrtc.jsx');
const ArticleMedia = require('./webrtc-media.jsx');
const ArticleP2P = require('./webrtc-p2p.jsx');
const ArticleMulti = require('./webrtc-multi.jsx');

const ReactPanel = require('./react.jsx');

const MyBreadcrumb = require('./breadcrumb.jsx');

const dispPanels = {
	"home":MyHome ,
	"home-profile":MyProfile,
	"home-hobby":MyHobby,
	"home-works":MyWorks,

	"home-works-raspi":RaspiPanel,
	"home-works-raspi-setup":ArticleSetup,
	"home-works-raspi-opencv":ArticleOpencv,
	"home-works-raspi-pyaudio":ArticlePyAudio,
	"home-works-raspi-tornado":ArticleTornado,
	"home-works-raspi-camera":ArticleCamera,

	"home-works-webrtc":WebRTCPanel,
	"home-works-webrtc-media":ArticleMedia,
	"home-works-webrtc-p2p":ArticleP2P,
	"home-works-webrtc-multi":ArticleMulti,

	"home-works-react":ReactPanel
};

const titles = {

	"home":"ようこそ" ,
	"home-profile":"自己紹介ページ",
	"home-hobby":"趣味",
	"home-works":"記事一覧",

	"home-works-raspi":"Raspberry Piに関する記事一覧",
	"home-works-raspi-setup":"Raspberry Piのセットアップ",
	"home-works-raspi-opencv":"Opencvで画像処理",
	"home-works-raspi-pyaudio":"PyAudioで音声処理",
	"home-works-raspi-tornado":"Pythonで簡単Webサーバ",
	"home-works-raspi-camera":"監視カメラを作る",

	"home-works-webrtc":"WebRTCに関する記事一覧",
	"home-works-webrtc-media":"Webカメラを使ってみる",
	"home-works-webrtc-p2p":"P2Pで通信してみる",
	"home-works-webrtc-multi":"Webカメラの映像を配信してみる",

	"home-works-react":"Reactに関する記事一覧"
};



const MainFrame = React.createClass({


	getInitialState:function(){
	
		return {display:"home"};
	
	},
	
	changePanel:function(e){
		this.setState({display:e});
		
	},

	testHandler:function(e){
		alert(e);
		this.changePanel(e);
	},

	render:function(){
		var Display = this.props.panels[this.state.display];
		var title = this.props.titles[this.state.display];
		if(!Display)Display = MyHome;
		return(
		
			<div id="mainPanel">
				<MyTitlebar onClickHandler = {this.changePanel}/>
				<MyBreadcrumb breads={this.state.display} onClickHandler={this.changePanel}/>
				<MyPageHeader title={title}/>
				<Display onClickHandler={this.changePanel}/>
				<div className="bs-docs-footer"/>
			</div>

		);
	
	}

});

ReactDOM.render(<MainFrame panels = {dispPanels} titles = {titles}/>,document.getElementById('app'));
