
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Header } from '../../components/Headers'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { p } from '../../components/normalize';
import Images from '../../constants/Images';
import * as DATA from '../../config/staticData'

export default class _Agregar extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filteredData: [],
      search: '',
      // categoria: -1,
      // dropDown1: false,

      nombre: '',
      dirección: '',
      telefono: '',
      categoria: '',
      subCategoria: '',
      horarios: '',
      time: ''


    };
  };

  render() {
    const { 
      nombre, 
      dirección, 
      telefono, 
      dropDown1, 
      categoria, 
      subCategoria, 
      horarios, 
      time 
    } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>

        <Header
          title={'Registro'}
          right={(
            <View style={styles.rightHeader}>
              <MaterialCommunityIcons name={'cart'} size={p(30)} color={'#6D6E71'} />
            </View>
          )}
          onBack={()=>this.props.navigation.pop()}
        />
        <ScrollView style={styles.view}>

          <Text style={styles.text}>Nombre del negocio</Text>
          <TextInput
            placeTextColor="rgba(44, 62, 80,0.9)"
            returnKeyType="next"
            onSubmitEditing={() => this.direcciónInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.nombreInput = input}
            onChangeText={value => this.setState({ nombre: value.trim() })}
          />

          <Text style={[styles.text, { marginTop: p(2) }]}>Categoria</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.dropDown} >
              <Text style={styles.text}>{categoria}</Text>
            </View>
            <SimpleLineIcons
              onPress={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Categoria',
                  data: DATA.CATEGORIES_CATEGORIA,
                  update: (x) => this.setState({ categoria: x })
                })
              }
              name={'arrow-down'}
              size={p(19)}
              color={'#111'}
              style={{ marginLeft: p(6), marginRight: p(30) }}
            />
          </View>

          {/* {
              dropDown1 &&
              <View style={{ marginTop: 0 }}>
                {REGISTER_CATEGORIA.map((item, key) => (
                  <TouchableOpacity onPress={() => this.setState({ categoria: key, dropDown1: false })} style={styles.dropDown} key={key}>
                    <Text style={styles.text}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            } */}

          <Text style={[styles.text, { marginTop: p(4) }]}>SubCategoria</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.dropDown} >
              <Text style={styles.text}>{subCategoria}</Text>
            </View>
            <SimpleLineIcons
              name={'arrow-down'}
              onPress={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Subcategoria',
                  data: DATA.CATEGORIES_SUBCATEGORIA,
                  update: (x) => this.setState({ subCategoria: x })
                })
              }
              size={p(19)}
              color={'#111'}
              style={{ marginLeft: p(6), marginRight: p(30) }}
            />
          </View>

          <Text style={[styles.text, { marginTop: p(2) }]}>Horarios</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.dropDown, { width: p(70) }]} >
              <Text style={styles.text}>{horarios}</Text>
            </View>

            <SimpleLineIcons
              name={'arrow-down'}
              size={p(19)}
              color={'#111'}
              style={{ marginLeft: p(6), marginRight: p(30) }}
              onPress={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Horarios',
                  data: DATA.CATEGORIES_HORARIOS,
                  update: (x) => this.setState({ horarios: x })
                })
              }
            />

            <View style={[styles.dropDown, { width: p(70) }]} >
              <Text style={styles.text}>{time}</Text>
            </View>

            <SimpleLineIcons
              name={'arrow-down'}
              size={p(19)}
              color={'#111'}
              style={{ marginLeft: p(6), marginRight: p(30) }}
              onPress={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Horarios',
                  data: DATA.CATEGORIES_HORARIOS,
                  update: (x) => this.setState({ time: x })
                })
              }
            />

          </View>

          <Text style={[styles.text, { marginTop: p(2) }]}>Dirección del negocio</Text>
          <TextInput
            placeTextColor="rgba(44, 62, 80,0.9)"
            returnKeyType="next"
            onSubmitEditing={() => this.telefonoInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.direcciónInput = input}
            onChangeText={value => this.setState({ dirección: value.trim() })}
          />

          <Text style={[styles.text, { marginTop: p(2) }]}>Telefono del negocio</Text>
          <TextInput
            placeTextColor="rgba(44, 62, 80,0.9)"
            returnKeyType="next"
            // onSubmitEditing={() => this.telefonoInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.telefonoInput = input}
            onChangeText={value => this.setState({ telefono: value.trim() })}
          />

          <TouchableOpacity style={styles.btn} onPress={() => alert('jey')}>
            <Text style={styles.text}>{'GPS Location'}</Text>
          </TouchableOpacity>

        </ScrollView>

        <TouchableOpacity 
          style={styles.bottom}
          onPress={()=>this.props.navigation.navigate('mapScreen')}
        >
          <Image source={Images.right} style={styles.icon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    // flex: 1,
    padding: p(22),
    // justifyContent: 'flex-start',
  },

  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(18),
  },
  rightHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#e3e4e5',
    borderLeftWidth: p(2),
    paddingLeft: p(20)
  },
  text: {
    fontFamily: 'GeosansLight',
    fontSize: p(13),
  },
  input: {
    height: p(22),
    backgroundColor: 'rgba(236, 240, 241,0.6)',
    marginBottom: 10,
    color: 'rgba(44, 62, 80,0.9)',
    fontSize: p(14),
    fontFamily: 'GeosansLight',
    paddingHorizontal: 10,
    borderRadius: 20
  },
  icon: {
    resizeMode: "contain",
    height: p(30),
    width: p(30),
    marginHorizontal: p(12)
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: p(12)
  },
  btn: {
    width: p(85),
    height: p(26),
    marginTop: p(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: p(20),
    backgroundColor: 'rgba(236, 240, 241,0.6)',
    // paddingHorizontal: p(6)
  },
  dropDown: {
    height: p(22),
    marginTop: p(3),
    justifyContent: 'center',
    width: p(150),
    backgroundColor: 'rgba(236, 240, 241,0.6)',
    paddingHorizontal: 10,
    borderRadius: 20
  }
})
