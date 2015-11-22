 'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  SliderIOS,
  Image,
  Text,
  Animated,
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
        <Text style={styles.title}> JavaBin ølometer</Text>
        <Text> { this.state.numberOfBeers } enheter </Text>

        <SliderIOS
            style={styles.slider}
            minimumValue={0}
            maximumValue={16}
            onValueChange={(beers) => this.setState({ numberOfBeers: Math.floor(beers) })} />

        <Text>Din promille:</Text>
        <Text 
          style={[ styles.alco, {
            color: `rgb(${colorPrefix(this.state.numberOfBeers)}, 0, 0)`
          }]}>
            { this.alcohol() } %
        </Text>

        <BeerImages numberOfBeers={ this.state.numberOfBeers }/>
      </View>
    );
  },

  alcohol: function() {
    return ((this.state.numberOfBeers * 15) / ((80 * 1.7) - (0,15 * 4))).toFixed(2)
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slider: {
    width: 300
  },
  title: {
    fontSize: 20
  },
  beers: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    width: 350,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  beerImage: {
    width: 80,
    height: 100
  },
  alco: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('javabinDemo', () => AlcoMeter);
