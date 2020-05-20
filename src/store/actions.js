export function getCharacters(payload) {
	return {
		type: 'ASYNC_GET_CHARACTERS',
		payload

	}
}

export function setCharacters(payload) {
	return {
		type: 'SET_CHARACTERS',
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
