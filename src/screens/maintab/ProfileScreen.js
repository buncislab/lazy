import React from 'react';
import { FlatList, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity, Text, View, Row, Image, Subtitle } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BelomLogin from '../authentication/BelomLogin'
import UsersList from '../list/UsersList'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Lazy',
    tabBarLabel: ({ tintColor }) => (<Text style={{color: tintColor}}>Profile</Text>),
    tabBarIcon: ({ tintColor }) => (<Icon size={18} 
                          color={tintColor}  
                          name="person" />)
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Text>hlaman profile</Text>
      );
    }

    return (
      <BelomLogin 
        onPressLogin={() => this.props.navigation.navigate("LoginScreen")}
        onPressRegister={() => this.props.navigation.navigate("RegisterScreen")}        
        title="Profile Pengguna"
        description="Halaman ini berisi profile dari akun pengguna.
        Ingin mempunyai akun sendiri?
        Silahkan register terlebih dahulu."
      />
    );
  }
}


function mapStateToProps(state) {
  return {isAuthenticated: state.account.isAuthenticated}
}

export default connect(mapStateToProps)(ProfileScreen);