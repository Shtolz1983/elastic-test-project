const getAllUser = () => ({
  index: 'users',
  query: {
    match_all: {},
  },
});

const getUsersSearch = ({ type, value }) => ({
  index: 'users',
  query: {
    match: {
      [type]: value,
    },
  },
});

const searchModelUser = {
  getAllUser: getAllUser,
  getUsersSearch: getUsersSearch,
};

module.exports = searchModelUser;
