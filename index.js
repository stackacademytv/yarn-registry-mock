
// Locahost port on which to run the registry
const port = 8888

// Deps
const regMock = require('npm-registry-mock')
const {spawn} = require('child_process')

// Start the mock NPM registry, sterr errors
regMock( {port}, (err) => {

  // Log any errors and exit
  if(err) {
    console.error(err)
    process.exit()
  }

  // Set the yarn registry to mocked url
  const yarn_set = spawn('yarn', ['config', 'set', 'registry', `http://localhost:${port}`])
  yarn_set.stdout.on('data', (data) => console.log(data.toString()) )
  yarn_set.stderr.on('data', (data) => console.log(data.toString()) )

});

// Unset mock registry when server is killed
process.on('SIGINT', () => {

  // Delete mock registry entry
  spawn('yarn', ['config', 'delete', 'registry'])
  
  // Kill server
  process.exit()
})
