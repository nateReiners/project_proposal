export const RECEIVE_ALL_PHOTOS    = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTOS = 'RECEIVE_SINGLE_PHOTOS';
export const START_LOADING_ALL_PHOTOS    = 'START_LOADING_ALL_PHOTOS';
export const START_LOADING_SINGLE_PHOTOS = 'START_LOADING_SINGLE_PHOTOS';
export const CREATE_PHOTOS         = 'CREATE_PHOTOS';
export const RECEIVE_NEW_PHOTOS    = 'RECEIVE_NEW_PHOTOS';
export const RECEIVE_PHOTOS_ERRORS = 'RECEIVE_PHOTOS_ERRORS';

import * as APIUtil from '../util/photos_api_util';

export const requestAllPhotos = () => (dispatch) => {
	dispatch(startLoadingAllPhotos());
	return APIUtil.fetchAllPhotos()
		.then(photos => dispatch(receiveAllPhotos(photos)));
}

export const requestSinglePhotos = (id) => (dispatch) => {
	dispatch(startLoadingSinglePhotos());
	return APIUtil.fetchSinglePhotos(id).then(photos => {
		dispatch(receiveSinglePhotos(photos))
		return photos;
	});
}

export const createPhotos = photos => dispatch => (
	APIUtil.createPhotos(photos).then(photos => {
		dispatch(receiveNewPhotos(photos));
		return photos;
	}).fail(err => dispatch(receivePhotosErrors(err.responseJSON)))
);

export const startLoadingAllPhotos = () => ({
	type: START_LOADING_ALL_PHOTOS
});

export const startLoadingSinglePhotos = () => ({
	type: START_LOADING_SINGLE_PHOTOS
});

export const receiveAllPhotos = photos => ({
	type: RECEIVE_ALL_PHOTOS,
	photos
});

export const receiveSinglePhotos = photos => ({
	type: RECEIVE_SINGLE_PHOTOS,
	photos
});

export const receiveNewPhotos = photos => ({
	type: RECEIVE_NEW_PHOTOS,
	photos
});

export const receivePhotosErrors = errors => ({
	type: RECEIVE_PHOTOS_ERRORS,
	errors
});
