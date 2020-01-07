export default (repo: string) => {
  const regex = /(https|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|[-\d\w._]+?)$/
  const isRepo = /^(?!.*https|git).*\w+(\/)\w+.*$/

  return regex.test(repo) || isRepo.test(repo)
}
