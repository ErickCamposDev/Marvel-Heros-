import React, { } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { useSelector } from 'react-redux'
import ForComponent from '../../component/ForComponet'
import DetailTitle from '../../component/DetailTitle'

function Details() {
  const { characterDetails } = useSelector(state => state.characters)



  return (
    <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
      <ScrollView>
        <DetailTitle>
          {'Events'}
        </DetailTitle>
        {characterDetails.events.items.map((item, i) => (<ForComponent key={`Event-${i}`}>{item.name}</ForComponent>))}
        <DetailTitle>
          {'Comics'}
        </DetailTitle>
        {characterDetails.comics.items.map((item, i) => (<ForComponent key={`Comics-${i}`}>{item.name}</ForComponent>))}
        <DetailTitle>
          {'Comics'}
        </DetailTitle>
        {characterDetails.series.items.map((item, i) => (<ForComponent key={`Series-${i}`}>{item.name}</ForComponent>))}
        <DetailTitle>
          {'Comics'}
        </DetailTitle>
        {characterDetails.stories.items.map((item, i) => (<ForComponent key={`Stories-${i}`}>{item.name}</ForComponent>))}
      </ScrollView>
    </View>
  )
}
export default Details