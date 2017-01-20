export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: {follow}
  });
};

export const deleteFollow = (userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/follow`,
    data: {userId}
  });
};
