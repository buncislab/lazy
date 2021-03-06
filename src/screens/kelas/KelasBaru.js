import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox } from 'react-native-elements'
import { Row, Subtitle, Image, Icon } from '@shoutem/ui';

export default class KelasBaru extends React.Component {
  
    static navigationOptions = ({ navigation }) => ({
        title: `Kelas Baru`,
      });
//Buat ngetes aja
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    let kategori = [{
        value: 'Ipa',
      }, {
        value: 'Matematika',
      }, {
        value: 'Olahraga',
      }];

    let jenjang = [{
            value: 'SD',
        }, {
            value: 'SMP',
        }, {
            value: 'SMA',
        }];
      
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.teksInputKelasBaru}>
                <TextField style={styles.textInput} 
                    label={'Nama kelas'}
                    highlightColor= {'#56CE00'}
                    textColor= {'#9E9E9E'} />
                <TextField style={styles.textInput}
                    label={'Deskripsi kelas'} 
                    highlightColor= {'#56CE00'}
                    textColor= {'#9E9E9E'}
                    multiline={true}/>
                <Dropdown
                    label='Kategori kelas'
                    data={kategori}
                    textColor= {'#9E9E9E'} />
                <Dropdown
                    label='Jenjang pendidikan'
                    data={jenjang}
                    textColor= {'#9E9E9E'} />
                <TextField style={styles.textInput}
                    label={'Tag'} highlightColor= {'#56CE00'}
                    textColor= {'#9E9E9E'} />
                <View style={styles.gambarKelas}>
                    <Text style={{fontWeight: 'bold', color: '#9E9E9E'}}>Gambar Kelas</Text>
                    <Row>
                        <Icon style={{fontSize: 100, color: '#9E9E9E'}}
                            name="photo"
                        />
                        <Button 
                            onPress={this._onPressButton}
                            styleName="top"
                            title="BROWSE" />
                    </Row>
                </View>
                <View>
                <CheckBox color='#9E9E9E'
                    title='Mengandung konten sensitif'
                    />
                </View>
                <View style={styles.buttonBuat}>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>BUAT KELAS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    paddingBottom: 20
  },
  teksInputKelasBaru: {
      marginLeft: 20,
      marginRight: 20
  },
  buttonBuat: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#388EE2',
    borderWidth: 1,
    borderColor: '#388EE2',
  },
  buttonText: {
    fontWeight: 'bold',
    padding: 15,
    color: '#FFFFFF',
  }
});


