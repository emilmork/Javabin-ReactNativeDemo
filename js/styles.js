var { StyleSheet } = require('react-native');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  slider: {
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    color: 'blue'
  },
  centeredText: {
    alignSelf: 'center'
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