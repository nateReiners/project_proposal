export const RECEIVE_ALL_PHOTOS    = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const CREATE_PHOTO         = 'CREATE_PHOTO';
export const RECEIVE_NEW_PHOTO    = 'RECEIVE_NEW_PHOTO';
export const RECEIVE_PHOTOS_ERRORS = 'RECEIVE_PHOTOS_ERRORS';

import * as APIUtil from '../util/photos_api_util';

export const requestAllPhotos = () => (dispatch) => {
	return APIUtil.fetchAllPhotos()
		.then(photos => dispatch(receiveAllPhotos(photos)));
};

export const requestSinglePhotos = (id) => (dispatch) => {
	return APIUtil.fetchSinglePhotos(id).then(photo => {
		dispatch(receiveSinglePhoto(photo));
		return photo;
	});
};

export const createPhoto = photo => dispatch => (
	APIUtil.createPhoto(photo).then(newPhoto => {
		dispatch(receiveNewPhoto(newPhoto));
		return newPhoto;
	}).fail(err => dispatch(receivePhotosErrors(err.responseJSON)))
);



export const receiveAllPhotos = photos => ({
	type: RECEIVE_ALL_PHOTOS,
	photos
});

export const receiveSinglePhoto = photo => ({
	type: RECEIVE_SINGLE_PHOTO,
	photo
});

export const receiveNewPhoto = photo => ({
	type: RECEIVE_NEW_PHOTO,
	photo
});

export const receivePhotosErrors = errors => ({
	type: RECEIVE_PHOTOS_ERRORS,
	errors
});
