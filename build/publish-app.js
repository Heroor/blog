const exec = require('child_process').exec
const util = require('util')
const execAsync =  util.promisify(exec)
const chalk = require('chalk')

;(async function () {
  // // npm run publish --build
  // if (process.env.npm_config_build) {
  //   require('./build')
  // }
  console.log(chalk.cyan('begin to public app...'))
  try {
    await execAsync('git add .', {cwd: './dist'})
    await execAsync('git commit -m "u"', {cwd: './dist'})
    await execAsync('git push', {cwd: './dist'})
    console.log(chalk.yellow('public success!\n'))
  } catch (err) {
    console.log(chalk.red(err))
  }
})()
