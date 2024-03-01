import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../utils/constants.tsx';

const InitViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerImage: {
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  containerTitle: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  firstTitle:{
    color:colors.primary,
    fontSize:25,
    fontFamily: fontFamily.fontFamilyBold
  },
  secondTitle:{
   color:colors.black,
   fontSize:25,
   fontFamily: fontFamily.fontFamilyBold
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    marginTop: '5%',
    fontFamily: fontFamily.fontFamilyRegular
  },
  containerButton: {
    marginTop: '15%',
    alignSelf: 'center',
  },
  gradientStyles: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default InitViewStyles;
