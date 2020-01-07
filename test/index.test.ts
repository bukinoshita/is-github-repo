import isGithubRepo from '../source'

const https: string = 'https://github.com/bukinoshita/is-git-repository.git'
const ssh: string = 'git@github.com:bukinoshita/is-git-repository.git'
const repo: string = 'bukinoshita/is-git-repository'

test('is repo', () => {
  expect(isGithubRepo(https)).toBe(true)
  expect(isGithubRepo(ssh)).toBe(true)
  expect(isGithubRepo(repo)).toBe(true)

  expect(isGithubRepo('https://github.com/bukinoshita')).toBe(false)
  expect(isGithubRepo('/aefwefew')).toBe(false)
  expect(isGithubRepo('git@github.com:bukinoshita/')).toBe(false)
})
