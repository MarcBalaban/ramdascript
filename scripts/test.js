var Jasmine = require('jasmine')
var jasmine = new Jasmine()

global.ram = require('../src/ramdascript')
global.T   = require('../src/nodes').type
global.R   = require('../vendor/ramda')

global.run = function run(src, vars) {
    var js = ram.compile(src, '<eval>')
    var fn = new Function('vars', js)
    return fn.call(null, vars)
}

global.contains = function(stack, needle) {
    return stack && stack.indexOf && stack.indexOf(needle) > -1
}

jasmine.configureDefaultReporter({
    showColors: false
})

jasmine.loadConfig({
    spec_dir   : 'test',
    spec_files : [
        'semantic.js',
        'behavior.js',
    ]
})

jasmine.execute()