import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as actionTypes from './store/actions';

const Count = () => {
	const number = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	const addOneHandler = () => {
		dispatch({
			type: actionTypes.ADD_ONE,
			payload: 1,
		});
	};
	const addFiveHandler = () => {
		dispatch({
			type: actionTypes.ADD_FIVE,
			payload: 5,
		});
	};
	const removeOneHandler = () => {
		if (number !== 0) {
			dispatch({
				type: actionTypes.REMOVE_ONE,
				payload: 1,
			});
		}
	};
	const removeFiveHandler = () => {
		if (number !== 0) {
			dispatch({
				type: actionTypes.REMOVE_FIVE,
				payload: 5,
			});
		}
	};
	const resetHandler = () => {
		dispatch({
			type: actionTypes.RESET,
		});
	};

	let circleClass = '';

	number === 0
		? (circleClass = 'circle')
		: number % 2 === 0
		? (circleClass = 'circle even')
		: (circleClass = 'circle odd');

	return (
		<div className="circle_and_buttonswrapper">
			<div className="circlewrapper">
				<div className={circleClass}>{number}</div>
			</div>
			<div className="buttonsarea">
				<button onClick={addOneHandler}>+1</button>
				<button onClick={addFiveHandler}>+5</button>
				<button onClick={removeOneHandler}>-1</button>
				<button onClick={removeFiveHandler}>-5</button>
			</div>
			<div className="buttonsarea">
				<button onClick={resetHandler}>reset</button>
			</div>
		</div>
	);
};

export default Count;
