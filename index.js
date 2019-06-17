const isGithubRepo = (repo, { withType = false } = {}) => {
  const regex = /(https|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|[-\d\w._]+?)$/
  const https = /https:(\/\/)github.com/
  const ssh = /git@github.com:/
  const isRepo = /^(?!.*https|git).*\w+(\/)\w+.*$/

  if (withType) {
    const result = { isGithubRepo: false, type: null }

    if (ssh.test(repo) && regex.test(repo)) {
      result.isGithubRepo = true
      result.type = 'ssh'
      return result
    }

    if (https.test(repo) && regex.test(repo)) {
      result.isGithubRepo = true
      result.type = 'https'
      return result
    }

    if (isRepo.test(repo)) {
      result.isGithubRepo = true
      result.type = 'repo'
      return result
    }

    return false
  }

  return regex.test(repo) || isRepo.test(repo)
}

module.exports = isGithubRepo
