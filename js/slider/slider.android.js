var React = require('react-native');
var SeekBarAndroid =  require('react-native-seekbar-android');

var Slider = React.createClass({
  
  render: function() {
    return (
         <SeekBarAndroid 
            style={{ marginLeft: 10, marginRight: 10 }}
            progress={0} 
            max={16} 
            onChange={(val) => this.props.onChange(val) } /> 
    );
  }
  
});

module.exports = Slider;