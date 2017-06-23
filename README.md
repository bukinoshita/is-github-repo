# is-git-repository [![Build Status](https://travis-ci.org/bukinoshita/is-git-repository.svg?branch=master)](https://travis-ci.org/bukinoshita/is-git-repository)

> Checks if string is a git repository

## Install

```
$ npm install --save is-git-repository
```

## Usage
```js
const isGitRepository = require('is-git-repository')

/* with https */
isGitRepository('https://github.com/bukinoshita/is-git-repository.git')
// => true

/* with ssh */
isGitRepository('git@github.com:bukinoshita/is-git-repository.git')
// => true

/* with owner/repo */
isGitRepository('bukinoshita/is-git-repository')
// => true
```

## API

### isGitRepository(repo, { withType })

returns a `boolean` or `object`.

#### repo

Type: `string`<br/>
Required

#### withType

Type: `boolean`<br/>
Default: `false`

if set to `true`, it will return an `object`.

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
