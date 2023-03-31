export default {
    getRepos() {
        return fetch("api/repos/get-repos")
        .then(res => res.json())
    },
    getLanguage(repoName) {
        return fetch(`api/repos/get-repos-language/${repoName}`)
        .then(res => res.json())
    }
}