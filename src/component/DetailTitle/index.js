import React from 'react';
import { View, Text } from 'react-native';
/**
 * faz qualquer coisa!! 
*@param children aqui testando 
 */
function DetailTitle({ children }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>{children}</Text>
    </View>
  );
}
export default DetailTitle

