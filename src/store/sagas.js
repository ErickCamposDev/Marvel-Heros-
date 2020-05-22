import { takeEvery, put, call, all, takeLatest } from 'redux-saga/effects'
import api from '../services/api'
import { setCharacters, setLoad, setCharactersByName } from './actions'

function* getCharacters({ payload: page }) {
	let offset = page * 5
	const limit = 5
	const key = '0da9c976fb52e1274222858c36e7fa3f'
	const hash = '040c060f428ec115b1d9178f4cc2bfac'
	const endpoint = 'characters'
	const { data } = yield call(api.get, `${endpoint}?ts=1589433421&apikey=${key}&hash=${hash}&limit=${limit}&offset=${offset}`)
	yield put(setCharacters(data.data.results))
	yield put(setLoad(false))
}

function* getCharactersByname({ payload }) {
	let offset = 0
	const limit = 20
	const key = '0da9c976fb52e1274222858c36e7fa3f'
	const hash = '040c060f428ec115b1d9178f4cc2bfac'
	const endpoint = 'characters'
	const { data } = yield call(api.get, `${endpoint}?nameStartsWith=${payload}&orderBy=name&ts=1589433421&apikey=${key}&hash=${hash}&limit=${limit}&offset=${offset}`)
	yield put(setCharactersByName(data.data.results))
}

export default function* root() {
	return yield all([
		takeLatest('ASYNC_GET_CHARACTERS', getCharacters),
		takeLatest('ASYNC_GET_CHARACTERS_BY_NAME', getCharactersByname)
	])
}

