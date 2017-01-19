export const fetchSingleUser = id => {
  console.log("hit fetchSingleUser ajax call");
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createUser = user => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: {user}
  });
}

export const updateUser = user => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user}
  });
}

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};
