const INITIAL_STATE = {
	heroname: '',
	loading: true,
	characterDetails: [],
	items: []
}
export default function characters(state = INITIAL_STATE, action) {
	switch (action.type) {

		case 'CLEAR_DATA':
			return { items: [], heroname: '' }

		case 'SET_CHARACTERS':
			return { ...state, items: [...state.items, ...action.payload], loading: false }

		case 'SET_CHARACTERS_BY_NAME':
			return { ...state, items: [...action.payload], loading: false }

		case 'SHOW_DETAILS':
			return { ...state, characterDetails: action.payload }

		case 'SET_LOAD':
			return { ...state, loading: action.payload }

		case 'SET_HERO_NAME': {
			return { ...state, heroname: action.payload }
		}
		default:
			return state
	}
}
