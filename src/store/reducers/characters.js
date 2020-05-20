const INITIAL_STATE = {
	loading: true,
	characterDetails: [],
	items: []
}
export default function characters(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return { ...state, items: [...state.items, ...action.payload], loading: false }

		case 'SHOW_DETAILS':

			return { ...state, characterDetails: action.payload }

		case 'SET_LOAD':
			return { ...state, loading: action.payload }

		default:
			return state
	}
}
