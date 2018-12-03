// https://github.com/pstadler/flightplan/issues/41#issuecomment-62517539
// flightplan.js
const plan = require('flightplan')

const tmpDir = `dollyflix-${new Date().getTime()}`

// configuration
plan.target('deploy', {
  host: '138.197.35.172',
  username: process.env.DEPLOY_USERNAME,
  password: process.env.DEPLOY_PASS,
  agent: process.env.SSH_AUTH_SOCK,
})

// run commands on localhost
plan.local((local) => {
  let filesToCopy = []
  local.log('Copy files to remote hosts')
  filesToCopy = local.exec('find build', {
    silent: false,
  })
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, `/tmp/${tmpDir}`)
})

// run commands on the target's remote hosts
plan.remote((remote) => {
  remote.log('Move folder to web root')
  remote.exec(`cp -R /tmp/${tmpDir}/build/* /var/www/current/`, {
    user: process.env.DEPLOY_USERNAME,
    group: 'root',
  })
  remote.rm(`-rf /tmp/${tmpDir}`)
})
