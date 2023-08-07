const userModel = {
  index: 'users',
  mappings: {
    properties: {
      id: { type: 'integer' },
      name: { type: 'text' },
      username: { type: 'text' },
      email: { type: 'keyword' },
      phone: { type: 'text' },
      website: { type: 'text' },
    },
  },
};

module.exports = userModel;
