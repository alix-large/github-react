function sortRepositories(repos) {
    return repos.sort((a, b) => a.open_issues - b.open_issues);
}

export { truncate, colorNumber, sortRepositories };