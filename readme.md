# is-github-repo [![Build Status](https://travis-ci.org/bukinoshita/is-github-repo.svg?branch=master)](https://travis-ci.org/bukinoshita/is-github-repo)

> Checks if string is a git repository

## Install

```
$ yarn add is-github-repo
```

## Usage

```js
const isGithubRepo = require('is-github-repo')

/* with HTTPS */
isGithubRepo('https://github.com/bukinoshita/is-github-repo.git')
// => true

/* with SSH */
isGithubRepo('git@github.com:bukinoshita/is-github-repo.git')
// => true

/* with owner/repo */
isGithubRepo('bukinoshita/is-github-repo')
// => true
```

## API

### isGithubRepo(repo)

returns a `boolean`.

#### repo

Type: `string`<br/>
Required

## Related

- [git-synced](https://github.com/bukinoshita/git-synced) — 🎐 Keep a fork up to date
- [del-git-index](https://github.com/bukinoshita/del-git-index) — Safely delete index.lock of the current project
- [repo-exist](https://github.com/bukinoshita/repo-exist) — Checks if GitHub repository exist
- [gopn](https://github.com/bukinoshita/gopn) — Open GitHub repositories
- [is-github-rify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url
- [git-url-prettify](https://github.com/bukinoshita/git-url-prettify) — Prettify git url

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
