import React from 'react';
import { View, Text } from 'react-native';

function ForComponet({ children }) {
  return (
    <View
      style={{ alignItems: "center", alignContent: 'center' }}
    >
      <Text>
        {children}
      </Text>
    </View>
  )
}
export default ForComponet