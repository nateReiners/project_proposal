export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {follow}
  });
};

export const fetchAllFollows = () => {
  return $.ajax({
    method: "GET",
    url: 'api/follows'
  });
};

export const destroyFollow = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};
