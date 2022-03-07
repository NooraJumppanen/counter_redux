import * as actionTypes from './actions';

const initialState = {
	counter: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ONE:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.ADD_FIVE:
			return {
				...state,
				counter: state.counter + 5,
			};
		case actionTypes.REMOVE_ONE:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.REMOVE_FIVE:
			return {
				...state,
				counter: state.counter - 5,
			};
		case actionTypes.RESET:
			return {
				...state,
				counter: 0,
			};
		default:
			return state;
	}
};

export default reducer;
