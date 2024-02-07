import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { ActionState } from "../actions";

export const searchPackages = (term: string) => {
	return async (dispatch: Dispatch<ActionState>) => {
		dispatch({
			type: ActionType.SEARCH_PACKAGES
		});

		try {
			const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
				params: {
					text: term
				}
			});

			const names = data.objects.map((result: any) => {
				return result.package.name
			});

			dispatch({
				type: ActionType.SEARCH_PACKAGES_SUCCESS,
				payload: names
			});

		} catch (error: any) {
			dispatch({
				type: ActionType.SEARCH_PACKAGES_ERROR,
				payload: error.message
			})
		}
	}
}