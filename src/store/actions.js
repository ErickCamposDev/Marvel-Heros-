export function getCharacters(payload) {
	return {
		type: 'ASYNC_GET_CHARACTERS',
		payload

	}
}

export function getCharactersByName(payload) {
	return {
		type: 'ASYNC_GET_CHARACTERS_BY_NAME',
		payload

	}
}

export function setCharacters(payload) {
	return {
		type: 'SET_CHARACTERS',
		payload
	}
}

export function setCharactersByName(payload) {
	return {
		type: 'SET_CHARACTERS_BY_NAME',
		payload
	}
}

export function showDetails(payload) {
	return {
		type: 'SHOW_DETAILS',
		payload
	}
}

export function setLoad(payload) {
	return {
		type: 'SET_LOAD',
		payload
	}
}

export function setHeroName(payload) {
	return {
		type: 'SET_HERO_NAME',
		payload
	}
}




export function clearData() {
	return {
		type: 'CLEAR_DATA'
	}
}

