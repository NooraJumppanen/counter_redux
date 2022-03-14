import * as actionTypes from './actions';

const initialState = {
	counter: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ONE:
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case actionTypes.ADD_FIVE:
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case actionTypes.REMOVE_ONE:
			return {
				...state,
				counter: state.counter - action.payload,
			};
		case actionTypes.REMOVE_FIVE:
			return {
				...state,
				counter: state.counter - action.payload,
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
