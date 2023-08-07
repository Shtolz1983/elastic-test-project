function getUsersPagination(users, limit, page) {
  const start = (page - 1) * limit;
  const end = (page - 1) * limit + limit;

  return users.slice(start, end);
}

module.exports = getUsersPagination;

