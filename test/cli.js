var test = require('tape')
var spawn = require('child_process').spawn
var exec = require('child_process').exec

var node = process.execPath
var id = __dirname + '/../bin/cli.js'

test('process.argv[2]', function (t) {
  var cli = spawn(node, [id, '3'])

  cli.stdout.on('data', function (buf) {
    t.equal(buf.toString(), '3\n')
    t.end()
  })
})

test('read stream', function (t) {
  exec('echo wow | ' + node + ' ' + id,
       function (err, stdout, stderr) {
         if (err) t.error(err)
           t.equal(stdout, 'wow\n')
           t.end()
       })
})
