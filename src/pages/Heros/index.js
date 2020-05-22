import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'
import * as actions from '../../store/actions'
import style from '../../component/Styles/index'
import HeroCard from '../../component/HeroCard'
import Input from '../../component/SearcherInput'

function Heros({ navigation }) {
	const dispatch = useDispatch()
	const { items, loading, heroname } = useSelector(state => state.characters)
	const [page, setPage] = useState(0)

	useEffect(() => { if (heroname == '') { dispatch(actions.getCharacters(page)) } }, [page])

	if (loading == true) {
		return (
			<View style={style.activeIndicatorView}>
				<ActivityIndicator color='white' size={50} />
			</View>
		)
	} else {
		return (
			<View style={style.mainView}>
				<Input />
				<FlatList
					onEndReachedThreshold={0.8}
					keyExtractor={item => item.id}
					data={items}
					renderItem={({ item }) => (<HeroCard
						item={item}
						navigation={navigation}
						style={style.flatList}
					/>
					)}
					onEndReached={() => setPage(page + 1)}
				/>
			</View>
		)
	}
}
export default Heros