import React from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import { View, Text, Subtitle, Row, Image } from '@shoutem/ui'
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

class QuestionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Questions`,
  });
  
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchComments(params.id);
  }

  renderRow = ({item}) => (
    <Row styleName="small">
      <Image
        styleName="small-avatar"
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
      />
      <View styleName="vertical">
      <Subtitle>{item.title}</Subtitle>
      <Text numberOfLines={2}>{item.body}</Text>
    </View>
    </Row>
  )

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
            data={this.props.comments}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('QuestionForm')}
        >
        </ActionButton>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(QuestionsScreen);
