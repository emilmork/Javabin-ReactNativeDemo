var React = require('react-native');
var Slider = require('./slider/slider');
var styles = require('./styles');

var {
  StyleSheet,
  Image,
  Text,
  Animated,
  Navigator,
  View,
} = React;

const BeerURI = { 
  uri: 'http://www.clker.com/cliparts/6/d/0/c/13216380871142975465beer-batter-is-better_1-md.png'
};

const colorPrefix = function (num) {
  return num * 255 / 15;
}

const BeerImages = React.createClass({
  
  render: function() {
    var { numberOfBeers } = this.props;

    return <View style={styles.beers}>
      { Array(numberOfBeers).fill().map((v, i) => this.beerImage(i)) }
    </View>
  },

  beerImage: function(i) {
    return <Image
        key={ i }
        style={styles.beerImage}
        source={ BeerURI }
      />
  }
});


const AlcoMeter = React.createClass({

  getInitialState: function() {
    return {
      numberOfBeers: 0
    }
  },

  render: function() {
    return (
      <View style={styles.container}>

        <Text style={[styles.title, styles.centeredText]}> 
          JavaBin alkometer
        </Text>

        <Text style={styles.centeredText}> 
          { this.state.numberOfBeers } enheter 
        </Text>

        <Slider onChange={(val) => { this.setState({numberOfBeers: Math.floor(val)}); }} /> 

        <Text style={styles.centeredText}>
          Din promille:
        </Text>

        <Text 
          style={[ styles.alco, styles.centeredText, {
            color: `rgb(${colorPrefix(this.state.numberOfBeers)}, 0, 0)`
          }]}>
            { this.alcoholLevel() } %
        </Text>

        <BeerImages numberOfBeers={ this.state.numberOfBeers }/>

      </View>
    );
  },

  alcoholLevel: function() {
    return ((this.state.numberOfBeers * 15) / ((80 * 1.7) - (0,15 * 4))).toFixed(2)
  }
});

module.exports = AlcoMeter;