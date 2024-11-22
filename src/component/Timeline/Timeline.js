import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const TIMESIZE = {
  WIDTH: 50,
  HEIGHT: 30,
}
const DEFAULTDOTCOLOR = 'white';

export default class Timeline extends Component{
}

Timeline.defaultProps = {
  // timelineDirection: 'column',
  // timelineFormat: 'time-show-forward',
  // compactness: 20,
  // timelineItemHeight: 50,
  timelineDirection: 'row',
  timelineFormat: 'time-show-forward',
  compactness: 10,
  timelineItemWidth: 150,
  circleSize: 18,
  circleColor: '#007AFF',
  lineWidth: 1,
  showSeparator: false,
  innerCircle: 'dot',
  icon: 'hand-stop-o',
  iconColor: 'black',
  datasource: [
      {time: '1:44', title: 'Event 1'},
      {time: '10:45', title: 'Event 2'},
      {time: '12:00', title: 'Event 3'},
      {time: '14:00', title: 'Event 4'},
      {time: '16:30', title: 'Event 5'}
    ]
}

Timeline.propTypes = {
  datasource: PropTypes.array,
  timelineStyle: View.propTypes.style,
  timelineDirection: PropTypes.oneOf(['row', 'column']),
  timelineFormat: PropTypes.oneOf(['time-show-forward', 'time-show-afterward']),
  rowContainerStyle: View.propTypes.style,
  timeContainerStyle: View.propTypes.style,
  timeStyle: View.propTypes.style,
  circleSize: PropTypes.number,
  circleColor: PropTypes.string,
  lineWidth: PropTypes.number,
  innerCircle: PropTypes.string,
  showSeparator: PropTypes.bool,
  renderChildren: PropTypes.func,
  lineWidth: PropTypes.number,
  onEventPress: PropTypes.func,
  compactness: PropTypes.number,
  timelineItemWidth: PropTypes.number,
  timelineItemHeight: PropTypes.number,
}

const styles = {
  'column': StyleSheet.create({
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeContainer: {
      // minWidth: TIMEWIDTH,
      width: TIMESIZE.WIDTH,
    },
    separator: {
      height: 1,
      backgroundColor: '#aaa',
      marginTop: 10,
      marginBottom: 10
    }
  }),
  'row': StyleSheet.create({
    rowContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    timeContainer: {
      // minWidth: TIMEWIDTH,
      height: TIMESIZE.HEIGHT,
    },
    separator: {
      width: 1,
      backgroundColor: '#aaa',
      marginLeft: 1,
      marginRight: 1,
    }
  }),

  'time-show-forward':StyleSheet.create({
    timeWrapper: {
      alignItems: 'flex-end'
    },
  }),
  'time-show-afterward':StyleSheet.create({
    timeWrapper: {
      alignItems: 'flex-start'
    }
  }),

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    minHeight: 100,
    minWidth: 100,
  },
  time: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: 'white',
    padding: 5,
    borderRadius: 13,
    overflow: 'hidden',
    minWidth: 46.5,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
}