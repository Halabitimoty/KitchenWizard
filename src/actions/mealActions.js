import axios from '../api/axios'
import {
	FETCH_CATEGORY_BEGIN,
	FETCH_CATEGORY_ERROR,
	FETCH_CATEGORY_MEALS_BEGIN,
	FETCH_CATEGORY_MEALS_ERROR,
	FETCH_CATEGORY_MEALS_SUCCESS,
	FETCH_CATEGORY_SUCCESS,
	FETCH_MEALS_BEGIN,
	FETCH_MEALS_ERROR,
	FETCH_MEALS_SUCCESS,
	FETCH_SINGLE_MEAL_BEGIN,
	FETCH_SINGLE_MEAL_ERROR,
	FETCH_SINGLE_MEAL_SUCCESS
} from './actioms'

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from '../utils/constants'

export const startFetchCategories = async (dispatch) => {
	try {
		dispatch({ type: FETCH_CATEGORY_BEGIN });
		const response = await axios.get(`${CATEGORIES_URL}`);
		dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories });
	} catch (error) {
		dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message })
	}
}