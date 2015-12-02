#! /usr/bin/env node
var id = require('../')
var thing = process.argv[2]
var arr = []

if (thing) {
  return console.log(id(thing))
}

process.stdin.on('readable', function () {
  var buf = process.stdin.read()
  if (buf) arr.push(buf.toString())
})

process.stdin.on('end', function () {
  process.stdout.write(arr.join(''))
})
