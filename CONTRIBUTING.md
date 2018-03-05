# Contributing

You should follow this guide to ensure that everything's consistent, and dependent applications don't break. Work that contributes to this package should:

- Always be done in a branch
- Never include any versioning information (see separate [versioning guidelines](#versioning))
- Always be submitted via a pull request in the `#frontend-pr` slack room

## Pull requests

- Good pull requests - patches, improvements, new features - should remain focused in scope and avoid containing unrelated commits. You should follow the guidelines in the [frontend playbook](https://github.com/springernature/frontend-playbook/blob/master/practices/code-review.md)
- Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage)
- Merging pull requests should be done via [squash and merge](https://help.github.com/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)
- Once your pull request has been merged back to the master branch, you can follow the [versioning guidelines](#versioning) below to publish your changes. **Note**: you do not have to create a new version after every merge. Related merges can be bundled into one new version

## Versioning

All breaking changes will bump the MAJOR version as per the [semver convention](https://github.com/springernature/frontend-playbook/blob/master/git/semver.md). Therefore, every new rule addition, or change to an exisiting rule, will increase the MAJOR version. Removing a rule (turning it to `off`) will increase the MINOR version.

To publish a new version of the config:

1. Switch to the `master` branch, version commits are the only commits that shouldn't be in a pull-request
2. Increment either the major, minor, or patch version in [`package.json`](package.json). If you're unsure which, have a chat about it or re-read the semver docs
3. Add an entry to [HISTORY.md](HISTORY.md) outlining the changes in the new version. Take your time, this log should be useful to developers who use this config – it should help them make decisions about whether they can upgrade. Make sure to detail any rules that have changed or been added
4. Commit your changes with a message formatted as "Version 1.2.3" – this helps people find version commits in the log
5. Tag your newly created commit with the version number. E.g. `git tag 1.2.3`
6. Push both the commit and the new tags to origin: `git push && git push --tags`. It's really important to push tags as well!
7. The build system will automatically publish your new version based on the tag
