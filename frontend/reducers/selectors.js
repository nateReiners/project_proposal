import { values } from 'lodash';

export const selectPhotosItem = ({ photosDetail }, itemId) => {
	const foundItem = photosDetail.items.find(item => item.id === itemId);
	return foundItem || {};
};

export const selectAllPhotos = ({ photos }) => values(photos);
