import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity } from 'react-native';
import { Image, Icon } from '@shoutem/ui';
import { connect } from 'react-redux';

export default class KelasAtasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kelas`,
    headerRight: <Button title="Edit" onPress={() => navigation.navigate('KelasForm')}/>
  });

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.kelasnya}>
          <View style={styles.bagianKelasnya}>
            <View style={styles.imageKelas}>
              <Image
                styleName='medium-square'
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
              />
            </View>
            <View style={styles.bagianKanan}>
              <View style={styles.namaTgl}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>Antonius Angga</Text>
                <Text style={{color:'#BDBDBD', fontSize:12}}>2 minutes</Text>
              </View>
              <View style={styles.deskripsi}>
                <Text style={{fontSize: 13}}
                      numberOfLines={7}>Mari belajar lebih dalam mengenai peristiwa abrasi. 
                  Abrasi itu apa sih? 
                  Mari belajar lebih dalam mengenai peristiwa abrasi.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.LikeJoin}>
          <View style={styles.spaceKiri}></View>
          <View style={styles.spaceKanan}>
            <TouchableOpacity 
              style={{justifyContent:'center', alignItems:'center'}}
              onPress={this._onPressButton}>
              <Icon style={{color:'#fbc400', fontSize: 16, paddingRight:10}}
                    name='like'>
                <Text style={{color:'grey', fontSize: 16}}>10</Text>
              </Icon>
            </TouchableOpacity>
            <Button
              onPress={this._onPressButton}
              title="Join"
              accessibilityLabel="Button Join Kelas"
            />
          </View>
        </View>
        <View style={styles.tabtabnya}></View>
        <View style={styles.kontentabnya}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  kelasnya: {
    flex: .5,
    backgroundColor: '#ffffff'
  },
  tabtabnya: {
    flex: .2,
    backgroundColor: '#000'
  },
  kontentabnya: {
    flex: 1,
    backgroundColor: '#CCC'
  },
  bagianKelasnya: {
    flex: .79,
    flexDirection: 'row',
    margin: 10,
  },
  imageKelas: {
    flex: 1,
    justifyContent: 'flex-start',
    maxWidth: 150,
    maxHeight:145
    // backgroundColor: '#FFC107',
  },
  bagianKanan: {
    flex:1,
    flexDirection: 'column',
  },
  namaTgl: {
    flex:.4,
    marginBottom:15
  },
  deskripsi: {
    flex:1,

  },
  LikeJoin: {
    flexDirection: 'row', 
    margin:10,
    backgroundColor: '#ffffff'
  },
  spaceKiri:{
    flex: .5,
  },
  spaceKanan: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
