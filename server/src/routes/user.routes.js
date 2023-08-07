const router = require('express').Router();
const client = require('../elastic');
const { getAllUser, getUsersSearch } = require('../elastic/models/user/search');
const getUsersPagination = require('../utils/pagination');

router.get('/', async (req, res, next) => {
  try {
    const { limit, page } = req.query;

    res.header({
      'x-total-count': (await client.count({ index: 'users' })).count,
    });
    const usersClient = await client.search(getAllUser());
    const users = usersClient.hits.hits.map((hit) => hit['_source']);
    const usersPagination = getUsersPagination(users, +limit, +page);
    res.json(usersPagination);
  } catch (e) {
    next(e);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    if (!req.query.type || req.query.type === 'None') {
      const users = await client.search(getAllUser());
      return res.json(users.hits.hits.map((hit) => hit['_source']));
    }
    const users = await client.search(getUsersSearch({ ...req.query }));
    res.json(users.hits.hits.map((hit) => hit['_source']));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
