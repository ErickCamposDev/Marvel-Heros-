import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import DelayInput from 'react-native-debounce-input'
//import styles from './styles'

function Input() {
  const page = 0
  const dispatch = useDispatch()
  function setCharacters(Heroname) {
    if (Heroname == '') {
      dispatch(actions.clearData())
      dispatch(actions.getCharacters(page))
    } else {
      dispatch(actions.getCharactersByName(Heroname))
      dispatch(actions.setHeroName(Heroname))
    }
  }

  return (
    <View
      style={styles.StyleView}
    >
      <DelayInput
        delayTimeout={2000}
        placeholder='Type a hero!'
        style={styles.styleText}
        onChangeText={setCharacters}
        placeholderTextColor='white'
      />
    </View>
  )
}
export default Input

const styles = StyleSheet.create({
  StyleView: {
    alignItems: 'center',
    //borderWidth: 1,
    backgroundColor: 'black'
  },
  styleText: {
    color: 'white',
    fontSize: 20,



  }
})