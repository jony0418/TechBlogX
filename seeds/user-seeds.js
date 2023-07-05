const { User } = require('../models');

const userData = [
    {
        username: 'testuser1',
        email: 'test1@example.com',
        password: 'password123'
    },
    {
        username: 'testuser2',
        email: 'test2@example.com',
        password: 'password123'
    },
    // more users as needed
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
