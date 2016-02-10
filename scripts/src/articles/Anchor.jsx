const React = require('react');

const Anchor = React.createClass({
  propTypes: {
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },
  render() {
    return (
      <a id={this.props.id} href={'#' + this.props.id} className="anchor">
		  <span className="anchor-icon">#</span>
		  {this.props.id}
        {this.props.children}
      </a>
    );
  }
});

module.exports = Anchor;
