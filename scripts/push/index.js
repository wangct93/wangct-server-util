const spawn = require("../../lib").spawn;

start();

/**
 * 入口
 * @returns {Promise<void>}
 */
async function start(){
  await spawn('npm',['run','commit']);
  await spawn('git',['push','origin','master']);
}
