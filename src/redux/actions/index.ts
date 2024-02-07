import { ActionType } from "../action-types";

export interface searchPackagesAction {
	type: ActionType.SEARCH_PACKAGES
}

export interface searchPackagesSuccessAction {
	type: ActionType.SEARCH_PACKAGES_SUCCESS,
	payload: string[]
}

export interface searchPackagesErrorAction {
	type: ActionType.SEARCH_PACKAGES_ERROR
	payload: string
}

export type ActionState =
	| searchPackagesAction
	| searchPackagesSuccessAction
	| searchPackagesErrorAction