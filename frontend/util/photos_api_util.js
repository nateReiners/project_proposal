export const fetchFeedPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchAllPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos',
    data: {all: true}
  });
};

export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo }
  });
};
