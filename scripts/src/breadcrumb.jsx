const rb = require('react-bootstrap');
const Breadcrumb = rb.Breadcrumb;
const BreadcrumbItem = rb.BreadcrumbItem;

const React = require('react');
const ReactDOM = require('react-dom');

const MyBreadcrumb = React.createClass({

	clickHandler:function(e){
		return function(){
			this.props.onClickHandler(e);
		};
	},

	render:function(){

		var breads = this.props.breads.split('-').map(function(bread,index,arr){
			var isActive = index==(arr.length-1);
			var link = "";
			for(var i=0;i<index;i++){
				link += arr[i]+"-";
			};
			link += bread;
			return(
				<BreadcrumbItem active={isActive} onClick={this.clickHandler(link).bind(this)} key={index}>
					{bread}
				</BreadcrumbItem>
			);
		},this);

		return(

			<Breadcrumb>
				{breads}
			</Breadcrumb>

		);
	}
});

ReactDOM.render(<MyBreadcrumb breads={"raspi-config-test"}/>,document.getElementById('app'));

module.exports = MyBreadcrumb;
