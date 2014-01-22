require('./es6');
var testrunner = require("qunit");

// or use setup function
testrunner.setup({
  log: {
    assertions: true,
    errors: true,
    tests: true,
    summary: true,
    testing: true
  }
});

// one code and tests file
testrunner.run({
  code: './lib/thing.js', // not realy needed
  tests: './test/tests/thing_test.js'
}, function(err, report) {
  console.dir(report);
});

