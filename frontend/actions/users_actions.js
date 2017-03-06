export const RECEIVE_ALL_USERS    = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const CREATE_USER         = 'CREATE_USER';
export const RECEIVE_NEW_USER    = 'RECEIVE_NEW_USER';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';


import * as APIUtil from '../util/users_api_util';

export const requestAllUsers = () => (dispatch) => {
	console.log("hit requestAllPhotos");
	return APIUtil.fetchAllUsers()
		.then(users => dispatch(receiveAllUsers(users)));
};

export const requestSingleUser = (id) => (dispatch) => {
	return APIUtil.fetchSingleUser(id).then(user => {
		dispatch(receiveSingleUser(user));
		return user;
	});
};

export const createUser = user => dispatch => (
	APIUtil.createUser(user).then(newUser => {
		dispatch(receiveNewUser(newUser));
		return newUser;
	}).fail(err => dispatch(receiveUsersErrors(err.responseJSON)))
);

export const updateUser = user => dispatch => (
	APIUtil.updateUser(user).then(updatedUser => dispatch(receiveSingleUser(updatedUser)))
);


export const receiveAllUsers = users => ({
	type: RECEIVE_ALL_USERS,
	users
});

export const receiveSingleUser = user => ({
	type: RECEIVE_SINGLE_USER,
	user
});

export const receiveNewUser = user => ({
	type: RECEIVE_NEW_USER,
	user
});

export const receiveUsersErrors = errors => ({
	type: RECEIVE_USERS_ERRORS,
	errors
});
