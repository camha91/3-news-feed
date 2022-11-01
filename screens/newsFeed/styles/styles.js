import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: Platform.OS === 'ios' ? 100 : 56,
    paddingTop: Platform.OS === 'ios' ? 64 : 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    borderBottomColor: '#EBECF0',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  header_img: {
    width: 20,
    height: 20,
  },
  header__title: {
    fontSize: 16,
    fontWeight: '500',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: '#EBECF0',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  avatarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    padding: 10,
  },
  feedItemContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EBECF0',
    borderBottomWidth: 1,
  },
  feedItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  feedItemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feedItemTitleText: {
    color: '#BEBEBE',
  },
  feedBody__icons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});

export default styles;
