import React from 'react'
import { TextInput, View } from 'react-native'

function Input() {
  return (
    <View
      style={styles.StyleView}
    >
      <TextInput
        placeholder='Type a hero'
        style={styles.styleText}
      />
    </View>
  )

}
export default Input

const styles = {
  StyleView: {
    alignItems: 'center'
  },
  styleText: {
    fontSize: 20
  }
}