import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import styles from './styles/styles';

const dataAvatar = [
  {
    name: 'Sahara',
    image: require('../../assets/images/image1.jpeg'),
  },
  {
    name: 'Sophia',
    image: require('../../assets/images/image2.jpeg'),
  },
  {
    name: 'Hana',
    image: require('../../assets/images/image3.jpeg'),
  },
  {
    name: 'Naul',
    image: require('../../assets/images/image4.jpeg'),
  },
  {
    name: 'Kimihana',
    image: require('../../assets/images/image5.jpeg'),
  },
  {
    name: 'Yoko',
    image: require('../../assets/images/image6.jpeg'),
  },
  {
    name: 'Su',
    image: require('../../assets/images/image7.jpeg'),
  },
  {
    name: 'Finnia',
    image: require('../../assets/images/image8.jpeg'),
  },
  {
    name: 'Subana',
    image: require('../../assets/images/image9.jpeg'),
  },
  {
    name: 'Corohe',
    image: require('../../assets/images/image10.jpeg'),
  },
];

const dataFeeds = [
  {
    title: 'Lorem Ipsum is simply dummy text',
    name: 'Sahara',
    image: require('../../assets/images/image1.jpeg'),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '1 minutes',
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    name: 'Sophia',
    image: require('../../assets/images/image2.jpeg'),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '3 minutes',
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    name: 'Hana',
    image: require('../../assets/images/image3.jpeg'),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '5 minutes',
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    name: 'Naul',
    image: require('../../assets/images/image4.jpeg'),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '10 minutes',
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    name: 'Kimihana',
    image: require('../../assets/images/image5.jpeg'),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '1 minutes',
  },
];
export default class NewsFeed extends Component {
  state = {
    loveCount: 2,
    commenCount: 4,
  };

  _onClickChangeLoveCount = prevState => {
    return this.setState({
      loveCount: prevState + 1,
    });
  };

  _renderAvatar = () => {
    return dataAvatar.length <= 5
      ? dataAvatar.map((avatar, index) => {
          return (
            <View key={index} style={styles.avatarItem}>
              <Image style={styles.avatar} source={avatar.image} />
              <Text>{avatar.name}</Text>
            </View>
          );
        })
      : dataAvatar.slice(0, 5).map((avatar, index) => {
          return (
            <View key={index}>
              <Image style={styles.avatar} source={avatar.image} />
              <Text>{avatar.name}</Text>
            </View>
          );
        });
  };

  _renderFeedHeader = feed => {
    return (
      <View style={styles.feedItemHeader}>
        <Image style={styles.avatar} source={feed.image} />
        <View>
          <Text>{feed.title}</Text>
          <View style={styles.feedItemTitleContainer}>
            <Text style={styles.feedItemTitleText}>{feed.name}</Text>
            <Text style={styles.feedItemTitleText}>{feed.time}</Text>
          </View>
        </View>
        <Image style={styles.icon} source={require('../../assets/dots.png')} />
      </View>
    );
  };

  _renderFeedBody = feed => {
    return (
      <View>
        <Text>{feed.content}</Text>
        <View style={styles.feedBody__icons}>
          <TouchableOpacity
            onPress={() => this._onClickChangeLoveCount(this.state.loveCount)}>
            <Image
              style={styles.icon}
              source={require('../../assets/heart.png')}
            />
          </TouchableOpacity>
          <Text>{this.state.loveCount}</Text>
          <Image
            style={[styles.icon, {marginLeft: 10}]}
            source={require('../../assets/comment.png')}
          />
          <Text>4</Text>
        </View>
      </View>
    );
  };

  _renderFeedItems = feed => {
    return (
      <View style={styles.feedItemContainer}>
        {this._renderFeedHeader(feed)}

        {this._renderFeedBody(feed)}
      </View>
    );
  };

  _renderNewsFeed = () => {
    return dataFeeds.map((feed, index) => {
      return <View key={index}>{this._renderFeedItems(feed)}</View>;
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.header_img}
            source={require('../../assets/camera.png')}
          />
          <Text style={styles.header__title}>Feed</Text>
          <Image
            style={styles.header_img}
            source={require('../../assets/edit.png')}
          />
        </View>
        <View style={styles.avatarContainer}>{this._renderAvatar()}</View>
        {this._renderNewsFeed()}
      </View>
    );
  }
}
