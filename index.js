'use strict'

module.exports = (repo, { withType = false } = {}) => {
  const regex = /(https|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|[-\d\w._]+?)$/
  const https = /https:(\/\/)github.com/
  const ssh = /git@github.com:/
  const isRepo = /^(?!.*https|git).*\w+(\/)\w+.*$/

  if (withType) {
    const result = {
      isGitRepository: false,
      type: null
    }

    if (ssh.test(repo) && regex.test(repo)) {
      result.isGitRepository = true
      result.type = 'ssh'
      return result
    } else if (https.test(repo) && regex.test(repo)) {
      result.isGitRepository = true
      result.type = 'https'
      return result
    } else if (isRepo.test(repo)) {
      result.isGitRepository = true
      result.type = 'repo'
      return result
    }

    return false
  }

  return regex.test(repo) || isRepo.test(repo)
}
