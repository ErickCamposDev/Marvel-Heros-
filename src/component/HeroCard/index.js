import React from 'react'
import style from '../Styles/index'
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'
import * as actions from '../../store/actions'

function RenderItem({ item, navigation }) {

  const dispatch = useDispatch()

  function showDetails(character) {
    dispatch(actions.showDetails(character))
    navigation.navigate('Details')
  }
  return (
    <View style={{ backgroundColor: 'black' }}>
      <View style={style.card} >
        <Text style={style.title} >
          {item.name}
        </Text>
        <Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension} ` }}
          style={style.image}
        />
        <View style={style.viewButton}>
          <TouchableOpacity onPress={() => showDetails(item)} style={style.button}>
            <Text style={style.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default RenderItem