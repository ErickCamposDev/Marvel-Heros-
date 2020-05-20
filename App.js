import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Heros from './src/pages/Heros'
import { Provider } from 'react-redux'
import store from './src/store'
import Details from './src/pages/Details'

function App() {
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

const Routes = createAppContainer(createStackNavigator({
  Heros,
  Details,
}))

export default App