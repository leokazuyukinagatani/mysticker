import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373D98',
    paddingTop: 24
  },
  scroll: {
    paddingBottom: 50
  },
  picture: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 50,
    marginBottom: 30,
    overflow: 'hidden',

  },
  camera: {
    width: Dimensions.get("screen").width - 100,
    height: Dimensions.get("screen").height - 470,
    alignSelf: 'center'
  },
  player: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 55,
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
 
  sticker: {
    backgroundColor: '#373D98',
  }

});