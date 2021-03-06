
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Header } from '../components/Headers'
import { p } from '../components/normalize';
import { Comentarios, MISComentariosItem } from '../components/listItems';
import { MISComentarios } from '../config/staticData'

export default class _MisComentarios extends Component {

  static navigationOptions = () => ({
    header: null
  });

  _renderItem({ item, index }) {
    return (
      <Comentarios item={item} count={index} onClick={() => console.log('hey')} edit={true} />
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <Header 
          title={'Mis Comentarios'} 
          color={'#FACA0A'} 
          onBack={()=>this.props.navigation.pop()}
        />
        <View style={styles.view}>

          {
            MISComentarios.map((item, key) =>
              <View key={key}>
                <MISComentariosItem item={item}/>
                <FlatList
                  data={item.content}
                  keyExtractor={(item, i) => String(i)}
                  renderItem={this._renderItem}
                />
              </View>
            )
          }

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    padding: p(12),
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: p(12)
  },
  text: {
    fontFamily: 'GeosansLight',
    fontSize: p(12),
  },
  h1:{

  }

})
