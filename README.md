# is-github-repo [![Build Status](https://travis-ci.org/bukinoshita/is-github-repo.svg?branch=master)](https://travis-ci.org/bukinoshita/is-github-repo)

> Checks if string is a git repository

## Install

```
$ npm install --save is-github-repo
```

## Usage
```js
const isGithubRepo = require('is-github-repo')

/* with https */
isGithubRepo('https://github.com/bukinoshita/is-github-repo.git')
// => true

/* with ssh */
isGithubRepo('git@github.com:bukinoshita/is-github-repo.git')
// => true

/* with owner/repo */
isGithubRepo('bukinoshita/is-github-repo')
// => true
```

## API

### isGithubRepo(repo, { withType })

returns a `boolean` or `object`.

#### repo

Type: `string`<br/>
Required

#### withType

Type: `boolean`<br/>
Default: `false`

if set to `true`, it will return an `object`.


## Related

- [git-url-uglify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url
- [git-url-prettify](https://github.com/bukinoshita/git-url-prettify) — Prettify git url

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
