import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  body: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    zIndex: 999,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    marginTop: 8,
  },
  description: {
    marginBottom: 24,
  },
  close: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
