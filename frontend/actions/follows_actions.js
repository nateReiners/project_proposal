export const RECEIVE_ALL_FOLLOWS    = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_SINGLE_FOLLOW = 'RECEIVE_SINGLE_FOLLOW';
export const CREATE_FOLLOW         = 'CREATE_FOLLOW';
export const RECEIVE_NEW_FOLLOW    = 'RECEIVE_NEW_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

import * as APIUtil from '../util/follows_api_util';

export const requestAllFollows = () => (dispatch) => {
	return APIUtil.fetchAllFollows()
		.then(follows => dispatch(receiveAllFollows(follows)));
};

export const requestSingleFollow = (id) => (dispatch) => {
	return APIUtil.fetchSingleFollow(id).then(follow => {
		dispatch(receiveSingleFollow(follow));
		return follow;
	});
};

export const createFollow = follow => dispatch => {
	console.log("createFollow action hit!");
	return APIUtil.createFollow(follow).then(newFollow => {
		dispatch(receiveNewFollow(newFollow));
		return newFollow;
	}).fail(err => dispatch(receiveFollowsErrors(err.responseJSON)))
};

export const destroyFollow = id => dispatch => {
	console.log("destroyFollow action hit!");
	return APIUtil.deleteFollow(id).then(deletedFollow => {
		dispatch(removeFollow(deletedFollow));
	})
};

export const removeFollow = follow => ({
	type: REMOVE_FOLLOW,
	follow
})

export const receiveAllFollows = follows => ({
	type: RECEIVE_ALL_FOLLOWS,
	follows
});

export const receiveSingleFollow = follow => ({
	type: RECEIVE_SINGLE_FOLLOW,
	follow
});

export const receiveNewFollow = follow => ({
	type: RECEIVE_NEW_FOLLOW,
	follow
});
