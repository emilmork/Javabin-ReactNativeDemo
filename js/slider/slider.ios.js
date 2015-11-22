var React = require('react-native');
var { SliderIOS } =  React;

var Slider = React.createClass({
  
  render: function() {
    return (
        <SliderIOS
            style={{ marginLeft: 10, marginRight: 10 }}
            minimumValue={0}
            maximumValue={16}
            onValueChange={(val) => this.props.onChange(val) } 
        />
    );
  }

});


module.exports = Slider;