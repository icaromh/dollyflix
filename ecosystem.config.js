module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: 'icaromh.com',
      ref: 'origin/master',
      repo: 'https://github.com/icaromh/dollyflix',
      path: '/var/www/',
    },
  },
}
