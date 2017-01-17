export const fetchAllPhotos = () => {
  console.log("hit fetchAllPhotos ajax request");
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

export const createPhoto = (photo) => {
  console.log("hit createPhoto ajax request")
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo }
  });
};
