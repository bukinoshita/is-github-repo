'use strict'

import test from 'ava'
import isGithubRepo from './'

const https = 'https://github.com/bukinoshita/is-git-repository.git'
const ssh = 'git@github.com:bukinoshita/is-git-repository.git'
const repo = 'bukinoshita/is-git-repository'

test('https', t => {
  t.true(isGithubRepo(https))
})

test('ssh', t => {
  t.true(isGithubRepo(ssh))
})

test('repo', t => {
  t.true(isGithubRepo(repo))
})

test('fails', t => {
  const result = isGithubRepo('aefwefew')
  t.false(result)
})

test('fails repo without repo', t => {
  const result = isGithubRepo('aefwefew/')
  t.false(result)
})

test('fails repo without owner', t => {
  const result = isGithubRepo('/aefwefew')
  t.false(result)
})

test('fails https', t => {
  const result = isGithubRepo('https://github.com/bukinoshita')
  t.false(result)
})

test('fails ssh', t => {
  const result = isGithubRepo('git@github.com:bukinoshita/')
  t.false(result)
})

test('https with type', t => {
  const result = isGithubRepo(https, { withType: true })
  t.true(result.isGithubRepo)
  t.is(result.type, 'https')
})

test('ssh with type', t => {
  const result = isGithubRepo(ssh, { withType: true })
  t.true(result.isGithubRepo)
  t.is(result.type, 'ssh')
})

test('repo with type', t => {
  const result = isGithubRepo(repo, { withType: true })
  t.true(result.isGithubRepo)
  t.is(result.type, 'repo')
})

test('fails with type', t => {
  const result = isGithubRepo('aefwefew', { withType: true })
  t.false(result)
})

test('fails repo without repo with type', t => {
  const result = isGithubRepo('aefwefew/', { withType: true })
  t.false(result)
})

test('fails repo without owner with type', t => {
  const result = isGithubRepo('/aefwefew', { withType: true })
  t.false(result)
})

test('fails https with type', t => {
  const result = isGithubRepo('https://github.com/bukinoshita', { withType: true })
  t.false(result)
})

test('fails ssh with type', t => {
  const result = isGithubRepo('git@github.com:bukinoshita/', { withType: true })
  t.false(result)
})
