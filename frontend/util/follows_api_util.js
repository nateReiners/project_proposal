export const createFollow = (follow) => {
  console.log("createFollow APIUtil hit!");
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: {follow}
  });
};

export const deleteFollow = (userId) => {
  console.log("deleteFollow APIUtil hit!");
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/follow`,
    data: {userId}
  });
};
