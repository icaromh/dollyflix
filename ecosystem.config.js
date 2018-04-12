module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'site',
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: 'icaromh.com',
      ref: 'origin/master',
      repo: 'https://github.com/icaromh/dollyflix',
      path: '/var/www/',
      'pre-deploy-local': 'echo "locally"',
      'post-deploy': 'ls',
    },
  },
}
