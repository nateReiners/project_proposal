export const fetchAllPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (Photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos/',
    data: { Photo }
  });
};
