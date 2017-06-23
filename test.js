'use strict'

import test from 'ava'
import isGitRepository from './'

const https = 'https://github.com/bukinoshita/is-git-repository.git'
const ssh = 'git@github.com:bukinoshita/is-git-repository.git'
const repo = 'bukinoshita/is-git-repository'

test('https', t => {
  t.true(isGitRepository(https))
})

test('ssh', t => {
  t.true(isGitRepository(ssh))
})

test('repo', t => {
  t.true(isGitRepository(repo))
})

test('fails', t => {
  const result = isGitRepository('aefwefew')
  t.false(result)
})

test('fails repo without repo', t => {
  const result = isGitRepository('aefwefew/')
  t.false(result)
})

test('fails repo without owner', t => {
  const result = isGitRepository('/aefwefew')
  t.false(result)
})

test('fails https', t => {
  const result = isGitRepository('https://github.com/bukinoshita')
  t.false(result)
})

test('fails ssh', t => {
  const result = isGitRepository('git@github.com:bukinoshita/')
  t.false(result)
})

test('https with type', t => {
  const result = isGitRepository(https, { withType: true })
  t.true(result.isGitRepository)
  t.is(result.type, 'https')
})

test('ssh with type', t => {
  const result = isGitRepository(ssh, { withType: true })
  t.true(result.isGitRepository)
  t.is(result.type, 'ssh')
})

test('repo with type', t => {
  const result = isGitRepository(repo, { withType: true })
  t.true(result.isGitRepository)
  t.is(result.type, 'repo')
})

test('fails with type', t => {
  const result = isGitRepository('aefwefew', { withType: true })
  t.false(result)
})

test('fails repo without repo with type', t => {
  const result = isGitRepository('aefwefew/', { withType: true })
  t.false(result)
})

test('fails repo without owner with type', t => {
  const result = isGitRepository('/aefwefew', { withType: true })
  t.false(result)
})

test('fails https with type', t => {
  const result = isGitRepository('https://github.com/bukinoshita', { withType: true })
  t.false(result)
})

test('fails ssh with type', t => {
  const result = isGitRepository('git@github.com:bukinoshita/', { withType: true })
  t.false(result)
})
