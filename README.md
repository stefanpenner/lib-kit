# lib-kit [![Build Status](https://secure.travis-ci.org/stefanpenner/lib-kit.png?branch=master)](http://travis-ci.org/stefanpenner/lib-kit)

Kitchen-sink starter kit for building browser/node libraries. Extracted
from [rsvp.js](https://github.com/tildeio/rsvp.js)

Building:

```sh
grunt
```

developing:

the following will monitor your lib code, tests and vendor'd
dependencies, and rebuild as needed. Additionally, navigating to
http://127.0.0.1:8000, will display the browser tests.

```sh
grunt server

PORT=<optional port> grunt server // feel free to provide an alternative
port if 8000 doesn't work for you
```

Testing:

```sh
grunt test         // headless testing (phantom + node)
grunt test:node    // node
grunt test:phantom // phantom
grunt server       // browser (navigate to http://127.0.0.1:8000)
```

Releasing to bower(via github.com/components/<repo_name>) and npm

```sh
grunt build-release
grunt release-it:0.0.1
```
